---
layout: blog
title: "Deciphering Parking Signs with AI: A Prompt Engineering Deep Dive"
description: In this blog post, we'll delve into the world of prompt
  engineering, a technique for communicating with AI models, and how it can be
  applied to the problem of interpreting parking signs. I'll share the prompt I
  crafted for my app, Can I Park, designed to extract relevant information from
  parking sign images and present it in a structured format.
content: ml
stage: draft
date: 2024-06-14T21:53:26.814Z
thumbnail: /images/uploads/google-gemini-ai-icon.png
---
# Introduction

Have you ever felt frustrated trying to decipher confusing parking signs? Parking regulations can be complex, especially in unfamiliar areas, for people who may not be fluent in the regional language, or for individuals with visual impairments. But what if there was a way to use artificial intelligence (AI) to quickly and easily understand these signs?

In this blog post, we'll delve into the world of prompt engineering, a technique for communicating with AI models, and how it can be applied to the problem of interpreting parking signs. I'll share the prompt I crafted for my app, [Can I Park](https://play.google.com/store/apps/details?id=com.dugue.canipark&hl=en_US), designed to extract relevant information from parking sign images and present it in a structured format.

# Understanding Prompt Engineering

Prompt engineering is the art of crafting clear and effective instructions for AI models, like large language models (LLMs). It involves carefully choosing words and phrases, defining the desired output format, and providing examples to guide the model's behavior. In the age of LLMs, I fully see this becoming a skill akin to knowing how to work with a REST API for a software engineer. In other words, a tool that we all will be expected to have and be ready to use. So let's breakdown the parking sign problem, and see how to write a prompt that can give us all the information we need.

# The Parking Sign Challenge

Interpreting parking signs can be tricky due to:

* Visual Complexity: Signs often have multiple symbols, colors, and text elements.
* Ambiguity: Regulations can vary widely depending on the time, day, or vehicle type.
* Accessibility: Individuals with visual impairments might face challenges accessing the information.

Our Solution: A Purpose-Built Prompt

To address these challenges, we designed a prompt that:

* Requests Specific Information: It asks the AI model to extract key details like whether parking is allowed, time limits, costs, and any restrictions.
* Specifies Output Format: The prompt requires the model to respond in a clear, structured JSON format.
* Includes Examples: It provides examples of valid and invalid parking scenarios to guide the model's understanding.
* Handles Errors: The prompt instructs the model to give a specific response when it cannot interpret the image.



```kotlin
private fun formatPrompt(): String {
	return """
		It is currently ${getCurrentSystemTime()}. Tell me if I can park here right now based on 
		that information and the image provided, if it is a valid image of parking signs.
		If I can park, how long can I park? If there is no time limit, this field should be null.
		If there is a cost, how much does it cost? If no cost, this field should be null.
		Are there any restrictions? If there are no restrictions, this field should be null.
		If I can't park, why not? If I can park, this field should be null.
		Please only respond in JSON format based on the following schema and examples:
		{
			"title": "Parking Response",
			"type": "object",
			"properties": {
				"canIPark": {
					"type": "boolean",
					"description": "Whether or not the user can park at the location"
				},
				"howLong": {
					"type": "string",
					"description": "How long the user can park at the location"
				},
				"cost": {
					"type": "string",
					"description": "The cost of parking at the location"
				},
				"reasonIfNo": {
					"type": "string",
					"description": "The reason the user cannot park at the location"
				},
				"restrictions": {
					"type": "string",
					"description": "The restrictions on parking at the location"
				}
			},
			"required": ["canIPark"]
		},
		{
			"canIPark": true,
			"howLong": "2 hours",
			"cost": "$2.00 per hour",
			"reasonIfNo": null,
			"restrictions": Only cars with permits
		},
		{
			"canIPark": false,
			"howLong": null,
			"cost": null,
			"reasonIfNo": "No parking on Sundays",
			"restrictions": null
		}.
		If the image provided is not a valid image of parking signs,
		respond in the format with the "reasonIfNo" being "This is not a valid image for analysis".
		Do not include the schema in your response.
	""".trimIndent()
}
```

# How This Prompt Works

By providing a clear and structured prompt, we guide the AI model to focus on the relevant information and present it in a way that's easy for humans or other applications to understand and use.

Applications

This prompt could be used to develop a mobile app that:

* Takes a picture of a parking sign
* Uses the prompt to extract parking information
* Presents the information in a clear and accessible format, including text-to-speech for visually impaired users.

Conclusion

Prompt engineering is a powerful tool for unlocking the potential of AI models. By carefully crafting prompts, we can create applications that solve real-world problems and improve our lives.

The parking sign interpretation prompt is just one example of how AI can be used to make information more accessible and easier to understand. We're excited about the possibilities of prompt engineering and look forward to exploring other ways to leverage AI for the benefit of society.

Call to Action:

* Try out the prompt yourself! Share your results and feedback.
* Share this post with anyone who might find it interesting or useful.
* Let's connect and collaborate on other exciting AI projects!

**Hashtags: #promptengineering #NLP #AIforGood #accessibility**

<!--EndFragment-->