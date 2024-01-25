---
layout: blog
title: A Guide to Asynchronous Programming with Kotlin Coroutines
description: As a software developer, asynchronous and reactive programming are
  cornerstones of building efficient applications. This blog post goes over the
  core concepts of asynchronous programming, and how the Kotlin Coroutines
  library provides us with tools to simplify asynchronous programming in our
  applications.
content: kotlin
stage: draft
date: 2023-11-22T01:31:29.425Z
thumbnail: /images/uploads/kotlin.png
---
# Introduction: Asynchronous Programming Basics 
Asynchronous programming patterns are the cornerstones of modern software development. These patterns have been implemented across  virtually every modern programming language, and are fundamental to enabling developers to build efficient and maintainable software. This article will go over the core concepts behind asynchronous and reactive programming, and how Kotlin developers can utilize the coroutines library to write clean a synchronous code!! Let's start by delving into exactly what we mean by asynchronous and reactive programming:

- **Non-blocking execution** - This concept refers to how different tasks in software executes. It simply means that Long running or system intensive tasks should not block the execution of the main application logic. A very standard example of this is when dealing with an application that requires retrieving information from an API or backend service . Commonly when performing this task, the user needs to be notified somehow that the application is doing work to retrieve some information; typically this can be achieved with some form of loading screen or indicator. Point being, the task to make a request to the back end service should not block the operation that updates the user interface with a loading indicator(hence the term non-blocking). 
- **Concurrency** - Non blocking execution enables concurrency. This refers to the ability to manage multiple tasks seemingly at the same time. To continue with our above example, because our task to retrieve information from the API is not blocking the task that updates the user interface, these two tasks can be said to be running concurrently. And these two tasks will continue to run concurrently until the necessary data is retrieved from the api, and the UI is subsequently updated with that data. This third task would happen in some form of a callback function associated with the API task.
	
	It's important to note that concurrency can take many forms. Single-threaded languages (like Javascript)  can model concurrency by keeping track of system intensive or long running tasks in some kind of queue. In this model when a task is completed, the program notifies the system that the dependent code for this task is ready to execute. We call these tasks **asynchronous**, because the system running the code does not necessarily execute it sequentially. Continuing with our above example again, while the API task code and subsequently the UI update task code would be written before the loading screen task code, the latter would execute first since it is not an asynchronous task.

	Some programming languages on the other hand, allow for multithreading (like Java for example) and you will see that used to achieve concurrency. A thread that is typically referred to as the "main" or "UI" thread will be reserved for the user interface or whatever the main task of the application is, while other threads are used for asynchronous tasks. A multithreaded model for concurrency is called **parallelism**. 
- **Observability** - For asynchronous tasks we need to know if and when they complete, so that we can use that information to update our application accordingly. Observability is one of the ways we achieve this. There are several patterns that are used to achieve observability, including the observer pattern, the publish-subscribe pattern, and the callback pattern. These patterns all differently slightly and have specific use cases, But the main concept behind them all is to create a functional block of space to handle the results of asynchronous tasks.
- **Structured Concurrency** - This is a different approach to handling concurrent programming. Structured concurrency is about taking concurrent tasks, and grouping them in logical sequential steps. Structured concurrency for example, would allow us to take the loading screen task, the API task, and the UI update task, and arrange them sequentially in that order in our code. This is a newer paradigm shift that often makes asynchronous code more readable and testable. 

These are the basic concepts to asynchronous programming . There are many libraries across several programming languages that have different approaches for implementing these patterns. Let's explore the tools in Kotlin coroutines library that enable us to write efficient and clean asynchronous logic.
# What are Coroutines?
