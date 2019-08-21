# بسم الله الرحمن الرحيم

[TOC]

## HISTORY PLACES PROJECT BRIEF

### Project Objective

The objective of this project is to develop a detailed specification and a working prototype of History Places. To support this 10-week process, you will prepare a set of deliverables.

### Root Concept

History Places is an information system that enables people to submit photographs and other media such as audio files of places so that people can perceive how a building, view, landscape feature, or artifact has changed over time. Being able to perceive and discuss change is a fundamental aspect of humandiscourse. Thus, a system that enables these tasks can be used for many purposes. That, at least, is the theory.

### Short Scenarios

Consider these short scenarios that reify the root concept.

#### Environmental Health

An environmental group aims to show how the  natural  landscape  in  the  western  United  States  has  changed. Thus,they decide on a set of sites and ask people to submit photographs of thosesites.

#### Construction  Site  Progress

An  architect  wishes  to  capture  theprogress of a construction project. Thus, she takes pictures of the building siteover a period of a year to document how it developed.

### Community History

An elementary school teacher wishes to develop his students’ interest in history. Thus, he gives cameras to his students and asks them to go into the community with their parents to take pictures. The system is seeded with a set of historic photographs. Students begin by browsing these photographs and selecting one or two locations for their own current shots.

**Task** Before reading further, please identify a similar scenario that might benefit from a History Places orientation. What features of your scenario make it consistent with these examples?

### User Tasks in History Places

Consider the following tasks that people might perform in History Places.

**Task** In the following tasks,use CAPS-TEXT represents an entity/noun and underlined-text to represent an operation/verb. Rewrite the tasks in your delivery sheet / computer.

1. a user can submit a photograph or audio recording for a place.
2. a user can browse a directoryof places of arbitrary depth and breadth.
3. a user can find a particular place or photograph by a keyword.
4. a user can find photographs that are similar to another photograph.
5. a user can browse a timeline and discover places or photographs.
6. a user can vote on the quality of a place or photograph.
7. a user can discover the most popular places or photographs.
8. a user can find similar users.
9. a user can comment on a place or photograph.
10. a user’s behavior is tracked and recorded for future analysis.


**Task** Before reading further, select a scenario from this not or one of your own and consider which tasks you think are most relevant. Are any tasks missing? Do some tasks for your scenario need to be modified? Please note that it will not be possible to implement complete solutions for allthese tasks. You will implement partial solutions for only the most important tasks, and it will be up to you, in consultation with the teaching assistant andinstructor, to decide what they are.

### General Requirements

Your solution to the History Places project should satisfy the following general requirements.

1. Develop a general abstraction for the concept of PLACE. It should be possibleto represent a hierarchy of PLACES of arbitrary depth (e.g., World : SouthPacific : Fiji : Viti Levu : Suva : Central Square).
2. Develop an abstraction that allows you to represent both static media (e.g.,PICTURES) and dynamic media (e.g.,AUDIO RECORDINGS).
3. Develop an abstraction that allows you to track which users submitted MEDIA to PLACES. This abstraction will be important for giving credit to frequent users and for identifying users who may be abusing the system.
4. Develop an abstraction for users that includes a profile, with such information as age, gender, interests, favorite places, and so on.
5. You should impose no editorial control on your system (i.e., submissions arenot to be reviewed by an editor).
6. Assume that image, audio, and other such files are stored in an externalstorage infrastructure and these files have unique identifiers that can beaccessed by hypertext links. Thus, a file upload function is not required.
7. Do not implement a secure user authentication scheme. You may encodeunencrypted user identifiers on HTTP requests.
8. You  should  not  develop  an  extensive  collection  of  media;  collect  enoughitems to illustrate the key features of your system.
9. A high-quality visual design is not required. The emphasis of this projectshould be on interesting and powerful functions. The user interface needsonly to reveal these functions and be neat and clear.

As you proceed through the project, you should repeatedly return to this listof general requirements and use them to guide your decision-making

### Deliverables

1. Title page (1 page)
2. Executive summary (1)
3. Table of contents (1)
4. Introduction (∼3)
  1. Vision
  2. Functional Requirements
5. Design
  1. Conceptual Model (∼2)
  2. Logical Model (∼2)
  3. Information Retrieval Module (∼2)
  4. System Architecture (∼2)
6. Functions (−18 pages;−2 pages/function) 
  - For each function,
    - Responsible person
    - A use case
    - A wire-frame sketch
    - Feature and limitations
7. Conclusion (∼1)
  - Status and next steps
8. References
9. Acknowledgements
10. Appendices
  - A: Team Reflection on process (−4)
  - B: Additional wire-frame sketches
  - C: If needed, other appendices

#### Functions to Build

##### Functions #1

1. Create a place
2. Upload an image
3. Create a userFunctions

##### Functions #2

1. Browse a hierarchy of places
2. Browse photographs on a timeline
3. Browse a list of users

#### Function #3

1. Search places/photographs by keyword
2. Search photographs by keyword and date
3. Given a user, find similar users

### Conceptual Model

**Task**

1. Using ERD, build the conceptual model
2. Answer the following
  1. Can you write a query to determine to what Places a user has contributedMediaItems?
  2. How would you represent an isolated place in the Rocky Mountains withyour abstraction of Place?
  3. Can  you  represent a full range of different kinds of media; do different media require different attributes?

### Logical Model

**Task**

1. Build the logical model from the previous conceptual model.
2. Implement the presented model and queries using MySQL.

## References

- <http://faculty.washington.edu/dhendry/docs/jeric_hp.pdf>
