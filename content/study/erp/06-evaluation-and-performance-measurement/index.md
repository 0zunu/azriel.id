---
title: "Enterprise Resource Planning #06: ERP Evaluation and Performance Measurement"
summary: "ERP evaluation and performance measurement is a crucial step to ensure that the implemented ERP system provides the expected benefits. In this chapter, we will discuss various metrics and approaches for evaluating ERP performance."
description: "ERP evaluation and performance measurement is a crucial step to ensure that the implemented ERP system provides the expected benefits. In this chapter, we will discuss various metrics and approaches for evaluating ERP performance."
categories: ["Enterprise Resource Planning"]
tags:
  [
    "ERP",
    "ERP Evaluation",
    "ERP Performance Measurement",
    "ERP Evaluation Metrics",
  ]
series: ["Chapters on ERP"]
series_order: 6
date: 2026-04-06T02:30:30+07:00
draft: false
---

## Introduction

Not all information technology projects in companies run smoothly. The readiness factor of human resources (HR) in the company and the quality of consultants as working partners do not necessarily guarantee the successful implementation of an information system project.

It is a reality that not every human resource, both from the company and the consultant's side, necessarily has the same enthusiasm when working on an Information System project.

Consideration is needed when selecting the right human resources to handle an information system project. It is management's duty to select the right staff or employees as project leaders to be actively involved and handle information system projects, where the person is truly enthusiastic about following the information system project through to completion.

According to Richardus Eko Indrajit, the relationship between the value for company HR and consultants regarding the potential success of an Information System project can be seen in the following matrix:

## Human Resources Value Relationship

{{< mermaid >}}
quadrantChart
x-axis "Value for IT Konsultants: LOW" --> "HIGH"
y-axis "Value for Corporate People: LOW" --> "HIGH"
quadrant-1 "1 Win-win Project"
quadrant-2 "2 Knowledge Transfer"
quadrant-3 "4 Just for Fun"
quadrant-4 "3 Free R&D"
{{< /mermaid >}}

#### Quadrant One

This features an environment where HR from both parties feel they benefit from the project being worked on. In this situation, the project will usually run quite smoothly, because all parties cooperate well with each other. There are no feelings of suspicion or a desire to take advantage of the IT project's success. Viewed from the financial side of the project, the principle of "value for money" is usually the main consideration. Thus, a "win-win" atmosphere will be created, which is an ideal state for a project, minimizing the risk of IT project implementation failure.

#### Quadrant Two

Represents a situation where only the company (client) feels they gain many benefits from HR involvement in handling IT projects. Meanwhile, the consultant feels they do not obtain significant benefits from the existence of the IT project, so the consultant tends not to be intensely involved in the IT project. This phenomenon sometimes makes the company demand more than they should (over-demanding). Although initially, the risk of IT project failure is quite small, a prolonged atmosphere (if the IT project is relatively long-term) can increase the risk of IT project failure. This is because the consultant will take on other work outside the project, which will reduce the quality of the consultant's services.

#### Quadrant Three

This is the reverse situation of quadrant two, where the consultant feels they benefit from the IT project. Meanwhile, for the company, HR feels it tends to be a burden, so the company will leave it to the consultant to work on the IT project. This situation will lead the company's HR to offer various criticisms as a manifestation of disagreement with the various work results carried out by the consultant. This situation will create a high risk of project failure, regardless of whether the output produced from the IT project is of high quality or not. It is not uncommon for a situation to occur where the company becomes indifferent to the work carried out by the consultant.

In this situation, the consultant will benefit because, besides earning consulting fees, the project can also be used as a means of IT training, research, and development for the consultant.

#### Quadrant Four

Both parties, for various reasons and conditions, do not obtain any benefits from the IT project, so both parties usually mutually want the project to be completed quickly and with minimum quality. It is not uncommon for business ethics violations to occur by one or both parties, which can certainly cause risks in the future.

## New System Evaluation

The objectives of the new system evaluation review activity are:

1. Determine whether the system's goals and objectives are achieved
2. Determine whether operational procedures, operating activities, and controls have been perfected
3. Determine whether user needs have been met
4. Determine whether system limitations need to be considered

## System Evaluation Stages

{{< mermaid >}}
flowchart TD
N1["1. Identify what will be evaluated"]
N2["2. Determine Evaluation Criteria"]
N3["3. Organize evaluation activities"]
N4["4. Data collection<br/>(including measurement)"]
N5["5. Maintain record history"]
N6["6. Performance data analysis"]
N7["7. Formulate recommendations"]
N8["8. Take corrective action"]
N9["9. Evaluate results process"]

    %% Main downward flow
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
    N7 --> N8
    N8 --> N9

    %% Feedback flow (lines returning upwards)
    N8 --> N3
    N9 --> N1

{{< /mermaid >}}

## ERP System Maintenance

Maintenance activities include corrective actions against encountered problems, and adapting procedures for new features or required needs. Perfective ERP system maintenance activities act as responses to program application upgrades, while preventive maintenance activities are for routine administrative tasks.

Broadly speaking, the classification of ERP system maintenance activities can be seen in the following table:

| Type           | Task                           | Description                                                |
| :------------- | :----------------------------- | :--------------------------------------------------------- |
| **corrective** | additional program application | there is an additional program application from the vendor |
|                | troubleshooting                | resolving problems based on user reports                   |
| **adaptive**   | transfer                       | implementation of new features                             |
|                | testing                        | testing after changes occur                                |
|                | modification                   | internal customization                                     |
|                | interface adjustment           | implementation of interfaces with other programs           |
|                | version upgrade                | adjustment, planning with applications                     |
|                | Administration                 | monitoring response time, file size, backups, error logs   |
|                | workflow monitoring            | tracking the flow of maintenance activities                |

## ERP System Development

The development of business patterns and advancements in information and communication technology can influence the pattern of ERP system implementation in the future, including:

1. Use of web-based applications, especially to facilitate coordination with working partners in the supply chain
2. Increasing systems that use artificial intelligence to support the planning process
3. Increasing the use of ERP systems in medium-sized enterprises, with more stable technology, relatively faster implementation times, and easier installation costs
4. Systems tend to be flexible and modular (supporting a best-of-breed implementation approach)
5. Increasing third-party support (bolt-ons) as application providers accessed by intermediate systems (middleware)
