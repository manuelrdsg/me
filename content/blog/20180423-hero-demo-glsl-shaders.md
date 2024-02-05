---
title: "HeroDemo a GLSL Shaders project"
subtitle: "Per-fragment point lightning shaders step by step"
location: "London"
readingMins: 4
date: '2018-04-23'
categories:
- Dev
tags:
- Shaders
- OpenGL
- Dev
---

Through the last year I have been learning *OpenGL* and Shader programming with ***GLSL***. I started learning the basics of *OpenGL*, how to render objects, how to place them in the scene; and also the basics of shader programming, how the pipeline works and how to render basic effects like directional or ambient lightning.

After months learning *OpenGL* and *GLSL* I have developed this example project called **Hero Demo** it is a night scene, with particles effect, SkyBoxing, per-fragment point lightning, water rendering

Let's take a closer look at the implementation and all the effects added to the scene

### Scene

The main idea was to develop a night scene, so the lightning effects would be noticeable. So I created an island terrain using a *PNG heightmap*. I used one heightmap I have downloaded from the internet as a template and edited it using Photoshop.

The **heightmap** for the terrain:

![](https://res.cloudinary.com/manuelrdsg/image/upload/v1524150768/Terrain%20Heighmap.png)

To that terrain I added, a *Cabin, Pier, Bushes, Lamps and a firepit* model. Most of them were downloaded free of charge from [***TurboSquid***](https://www.turbosquid.com/) a 3D model database that I highly recommend. All of them were properly textured before place them in the scene.

The models used for the scene were:

![](https://res.cloudinary.com/manuelrdsg/image/upload/v1524151778/Lamp.png)
![](https://res.cloudinary.com/manuelrdsg/image/upload/v1524151777/Pier.png)
![](https://res.cloudinary.com/manuelrdsg/image/upload/v1524151765/Bush.png)
![](https://res.cloudinary.com/manuelrdsg/image/upload/v1524151778/Firepit.png)

![](https://res.cloudinary.com/manuelrdsg/image/upload/v1524151773/Cabin.png)

### Shaders

For this scene the approach selected was using multiple GLSL shaders so it would be easier to implement each one of the effects.

The shaders used were the following:

#### Basic Shader

Used for the effects applied only to the models rendered in the scene. Here I have implemented the **fog effect** and the per-fragment point lightning for the objects. It also contains directional and ambient lightning effects. Here you can see a *Snippet* about how the Ambient, Directional and Per-Fragment Point Lightning was implemented.

_Vertex Shader_
```c++
vec4 AmbientLight(AMBIENT light)
{
    // Calculate Ambient Light
    return vec4(materialAmbient \* light.color, 1);
}

vec4 DirectionalLight(DIRECTIONAL light)
{
    // Calculate Directional Light
    vec4 color = vec4(0, 0, 0, 0);
    vec3 L = normalize(mat3(matrixView) _ light.direction);
    float NdotL = dot(normal, L);
    if (NdotL &gt; 0)
    color &#43;= vec4(materialDiffuse _ light.diffuse, 1) \* NdotL;
    return color;
}

void main(void)
{
//...

    fogFactor = exp2(-fogDensity * length(position));

    	// calculate light
    color = vec4(0, 0, 0, 1);
    if (lightAmbient.on == 1)
    	color &#43;= AmbientLight(lightAmbient);
    if (lightDir.on == 1)
    	color &#43;= DirectionalLight(lightDir);

//...

}

```

_Fragment Shader_
```c++
vec4 compPoint(vec3 materialDiffuse, vec3 materialSpecular, float materialShininess, POINT light)
{
    vec4 result = vec4(0, 0, 0, 1);

    // diffuse
    vec3 L = normalize(matrixView * vec4(light.position, 1) - position).xyz;
    float NdotL = dot(L, normal.xyz);
    if (NdotL &gt; 0)
    	result &#43;= vec4(light.diffuse * materialDiffuse, 1) * NdotL;

    // specular
    vec3 V = normalize(-position.xyz);
    vec3 R = reflect(-L, normal.xyz);
    float RdotV = dot(R, V);
    if (NdotL &gt; 0 &amp;&amp; RdotV &gt; 0)
    	result &#43;= vec4(light.specular * materialSpecular * pow(RdotV, materialShininess), 1);

    // attenuation
    float dist = length(matrixView * vec4(light.position, 1) - position);
    float att = 1 / (dist * dist) / 0.1;

    return result * att;

}

void main(void)
{
    outColor = color;

    if (lightPoint1.on == 1){
    	outColor &#43;= compPoint(materialDiffuse, materialSpecular, materialShininess, lightPoint1);
    }
    if (lightPoint2.on == 1){
    	outColor &#43;= compPoint(materialDiffuse, materialSpecular, materialShininess, lightPoint2);
    }
    if (lightPoint3.on == 1){
    	outColor &#43;= compPoint(materialDiffuse, materialSpecular, materialShininess, lightPoint3);
    }
    if (lightPoint4.on == 1){
    	outColor &#43;= compPoint(materialDiffuse, materialSpecular, materialShininess, lightPoint4);

//...
}
```

#### Terrain Shader

In this shader, all the things related with *terrain texturing*, and lightning was implemented. In this case the texturing for the terrain is a little bit special, because it is textured with one texture or another depending if the program is rendering the part of the terrain above or bellow the water, this technique is called ***Shoreline multitexturing***.

_Vertex Shader_

```c++
void main(void)
{
    outColor = color;
    
    //...
    
    // shoreline multitexturing
    float isAboveWater = clamp(-waterDepth, 0, 1);
    outColor \*= mix(texture(textureBed, texCoord0), texture(textureShore, texCoord0), isAboveWater);
    
    //...
}
```

#### Water Shader

Here, I implemented all the things related with the water rendering effects. The wave animation of the water is down through the vertex shader. Also, the water is textured with a mixture of a water texture and the *skybox* colour so the water never have a completely different colour than the *skybox*.

_Vertex Shader_
```c++

float wave(float A, float x, float y, float t)
{
    t *= 2;
    return A * (
    sin(2.0* (x * 0.2&#43; y * 0.7) &#43; t * 1.0) &#43;
    sin(2.0* (x * 0.7&#43; y * 0.2) &#43; t * 0.8) &#43;
    pow(sin(2.0* (x * 0.6&#43; y * 0.5) &#43; t * 1.2), 2) &#43;
    pow(sin(2.0* (x * 0.8&#43; y * 0.2) &#43; t * 1.1), 2));
}


void main(void)
{
    // Calculate the wave
    float a = 0.05;
    float y = wave(a, aVertex.x, aVertex.z, t);

	float d = 0.05;
	float dx = (wave(a, aVertex.x&#43;d, aVertex.z, t) -wave(a, aVertex.x-d, aVertex.z, t)) / 2/ d;
	float dz = (wave(a, aVertex.x, aVertex.z&#43;d, t) -wave(a, aVertex.x, aVertex.z-d, t)) / 2/ d;

	vec3 newVertex = vec3(aVertex.x, y, aVertex.z);
	vec3 newNormal = normalize(vec3(-dx,1, -dz));

    //...

}
```

_Fragment Shader_
```c++
//...

// Water-related
uniform vec3 waterColor;
uniform vec3 skyColor;

void main(void)
{
    outColor = color;
    outColor *= texture(texture0, texCoord0.st);

	outColor = mix( vec4(waterColor, 0.2), vec4(skyColor, 1), reflFactor);
}
```

#### Particles Shader

I have implemented two different shaders for particle effects, but they are pretty much the same shader with the exception of some parameter so I would only show here the one related with the *rain effect*.

Vertex Shader
```c++
void main()
{
    float t = mod(time - aStartTime, particleLifetime);
    vec3 pos = aInitialPos &#43; aVelocity * t &#43; gravity * t * t;
    age = t / particleLifetime;

	// calculate position (normal calculation not applicable here)
	position = matrixModelView * vec4(pos, 1.0);
	gl_Position = matrixProjection * position;

	gl_PointSize = scaleFactor * clamp(10 / length(position), 1, 5);
}
```

Notice the line
```c++
    gl_PointSize = scaleFactor * clamp(10 / length(position), 1, 5);
```

What this line does is resize the particle depending on the distance of it with the camera. So if we are closer it will look bigger and if we are further it will look smaller.

### Summary

Here is a Screenshot of the outcome of the project:

![](https://res.cloudinary.com/manuelrdsg/image/upload/v1524149281/HeroDemo.png)

The whole project is available in [*GitHub*](https://github.com/manuelrdsg/HeroDemoGLSL), so don't hesitate to fork the project and modify the code as you like.

[*GitHub Repository*](https://github.com/manuelrdsg/HeroDemoGLSL)

&nbsp;

Models by [*TurboSquid.com*](https://www.turbosquid.com)
