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
Asynchronous and reactive programming are the cornerstones of modern software development. These patterns have been implemented across  virtually every modern programming language, and are fundamental to enabling developers to build efficient and maintainable software. This article will go over the core concepts behind asynchronous and reactive programming, and how Kotlin developers can utilize the coroutines library to write clean a synchronous code!! Let's start by delving into exactly what we mean by asynchronous and reactive programming.

- **Non-blocking execution** - This concept refers to how different tasks in software executes. It simply means that tasks should not have to wait on each other to start or finish. A very standard example of this is when dealing with an application that requires retrieving information from an API or backend service . Commonly when performing this task, the user needs to be notified somehow that the application is doing work to retrieve some information; typically this can be achieved with some form of loading screen or indicator. Point being, the task to make a request to the back end service should not block the operation that updates the user interface with a loading indicator(hence the term non-blocking). 
- **Concurrency** - Non blocking execution enables concurrency. This refers to the ability to manage multiple tasks at the same time. While these tasks might not execute or finish at the same time, 
- **Observability -
- **Structured Concurrency** - 
There are many libraries 