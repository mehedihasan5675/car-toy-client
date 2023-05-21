import React from "react";

const Blog = () => {
  return (
    <div className="bg-[#E3F4F4] py-10">
      <div className="max-w-7xl mx-auto px-5 flex gap-5 flex-col">
      <div
        className="collapse collapse-open  mx-auto border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p className="tracking-wider"><span className="text-gray-700 font-semibold tracking-wider">An access token is</span>  a piece of code that contains information about the user, timeframes, groups, and permissions which move from a server to a user’s device. Access tokens give permission to a particular application to access an API.

Many websites use access tokens, which vary from website to website. For example: Google Calendar needs permission to access the calendar’s API to create and schedule events through an access token.

Access tokens generally contain three parts that are used to verify a user has permission to access a particular resource including:

Header: gives information about how to validate the token and information about the type of token.
Payload: provides information about the user and application that is requesting access to the service.
Signature: contains the verification data used to validate and authenticate the token.
Access tokens work by communicating between the server and a device where users follow these simple steps:

Sign in: verify your identity by entering your username and password.
Verify: the server verifies the data and provides a token.
Store: the token is sent to your browser.
Communicate: the token is verified each time you access something new on the server.
Delete: the token is deleted once your session has ended.</p>

<p className="tracking-wider"><span className="text-gray-700 font-semibold tracking-wider">A refresh token is</span> a special token used to unlock more access tokens. Access tokens are only valid for a short period of time. When they expire, a refresh token can give the user continued access without having to sign in again.

When authentication servers provide an access token to a user it also provides a valid refresh token which is then used to authenticate users after the access token has expired. Access tokens have short lifespans on purpose because the longer an access token is valid the more likely it can be compromised.

Refresh tokens improve the user experience without compromising any security and don’t give users additional access beyond the original scope. Let’s say you’re constantly asked to sign in each time you want to use Netflix to watch TV. It would get pretty frustrating and weaken your user experience and you may even cancel your subscription and choose a competitor.

To combat this, applications use refresh tokens behind the scenes to allow users to go back to their previous Netflix session without having to constantly log in each time. Let’s dive into how refresh tokens work behind the scenes:

Sign in: the user signs into an application using their username and password.
Access a protected endpoint: the user gains access to a valid access token and the server makes a request on behalf of the user.
Use a refresh token to renew access: the access token will expire after a short period of time, so a request is sent to another endpoint to renew the access token.
If a user revokes access to their session the refresh token and the access token become invalid and a new request for an access token and a new refresh token.</p>
        </div>
      </div>








      <div
        className="collapse collapse-open  mx-auto border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          2. Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p className="tracking-wider">SQL -Structured Query Language and NoSQL -Not only SQL are two different types of database management systems that serve different purposes and have distinct characteristics.  The conventional database is SQL database system that uses tabular relational model to represent data and their relationship. The NoSQL database is the newer one database that provides a mechanism for storage and retrieval of data other than tabular relations model used in relational databases.


SQL databases are based on a structured data model known as the relational model. Data is organized into tables with predefined schemas, and relationships between tables are established using foreign keys.
NoSQL databases use various data models such as key-value, document, columnar, or graph. They provide more flexibility in handling unstructured or semi-structured data, allowing for dynamic schema changes and easier scalability.</p>


        </div>
      </div>







      <div
        className="collapse collapse-open  mx-auto border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          3. What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <p className="tracking-wider">NestJS is a Node.js framework for building server-side applications. It is based on TypeScript and JavaScript.

This framework is inspired by Angular, so most of what you find in Angular can also be found in Nest, including providers, middleware, components, and services. It is safe to say that Nest can be easily learned by Angular developers for any type of project.

Nest makes use the Express HTTP framework by default. However, Nest is platform agnostic, meaning it can work with any Node HTTP framework. For example, it can optionally be configured to use Fastify, which can improve the Node framework.

One of the cool things about NestJS is that anything supported in Express  is also supported in Nest.</p>

<p className="tracking-wider">Express is a Node.js web application framework that provides a wide range of functionality for constructing web and mobile applications. It is a layer built on top of Node that aids in the management of servers and routes.

You can use Express with Node to create single-page, multi-page, or hybrid web applications. It supports the MVC architectural pattern for designing web applications: Model, View, and Controller.</p>


        </div>
      </div>





      <div
        className="collapse collapse-open  mx-auto border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          4. What is MongoDB aggregate and how does it work ?
        </div>
        <div className="collapse-content">
          <p className="tracking-wider">In MongoDB, aggregation can be defined as the operation that is used for processing various types of data in the collection, which returns a calculated result. The concept of aggregation mainly clusters out your data from multiple different documents which are then used and operates in lots of ways  to return a combined result which can bring new information to the existing database. You can relate aggregation to that of the count along with the 'group by' used in SQL since both are equivalent in terms of the working.</p>

<p className="tracking-wider">The order of the stages in the pipeline is significant, as each stage takes the output of the previous stage as input. This allows you to perform a series of transformations on the data, building up complex queries and aggregations.

The aggregate function in MongoDB can handle large data sets efficiently and provides powerful features for data aggregation and analysis. It offers a flexible and expressive way to process data and generate meaningful insights from your collections of documents.</p>


        </div>
      </div>

      </div>
    </div>
  );
};

export default Blog;
