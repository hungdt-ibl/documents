# ONLINE RECRUITMENT SYSTEM

## About

Online recruitment system is a platform to hold all the process of the employment for the organization. It is an automated system with the various component to facilitate the processes involved in finding, attracting, assessing, interviewing and hiring a new employee.

## Modules

### Admin Module

 + Quản lí user
 + Quản lí job seekers, skill
 + Quản lí employers
 + Quản lí Jobs, Job Category
 + Quản lí payment, Credit ( hệ thống điểm hoặc giới hạn số lượng REQUISITION )
 + Quản lí Job Applications
 + Report
 + Quản lí properties
 
### Job Seeker Module

 + Login and signup
 + Profile 
 + Resume (skill, timeline, etc)
 + Applications history
 
### Employer Module
 + Login and signup
 + Post job
 + Job manager
 + Applications manager
 + Profile
 + Payment

## ER Diagrams

![alt images](https://github.com/zrg-team/documents/blob/master/images/ER.png?raw=true "ER Diagram")

## Usecase Diagrams

![alt Usecase](https://github.com/zrg-team/documents/blob/master/images/use_case.png?raw=true "Usecase Diagram")

## Context Diagrams

![alt Usecase](https://github.com/zrg-team/documents/blob/master/images/context.png?raw=true "Usecase Diagram")

## Functional Requirement:

Creation of the new record for the new job seeker or the new employer.

Deletion of the record which already exist in the system based on the admin’s request.

Posting the requisition for the candidates and able to retrieve them if required.

Candidate can apply for the job and see the further details

Admin handles employers and their job posts, this function eases the process of management.

## Non-Functional Requirement:

Security of the system is maintained by providing login interface to the user. Only who has the login is and password can enter the system.

User-Friendly as the system is very interactive and can be easily operated.

Maintainability and reliability if the system is kept very thoroughly as all the records kept in the database have the backups and system can restore if there is power loss.

## Promising Features:

 + Khóa học, Chứng chỉ
 + Blogs
 + INTERVIEW: Tạo bộ câu hỏi để interview job seeker
 + Job Alert: thông báo cho job seeker khi có job phù hợp được tạo hoặc có ứng viên phù hợp
 + ...

## Document:

```
user: administrator
password: abc123
(they are pre-entered also on the form)

Link: https://www.phpscriptdemos.com/jobs/ADMIN/login.php?error=expired
```

```
user: teste@teste.com
password: teste 
or you may create your own test account.

Link: https://www.ittjobs.com/index.php?show_login=1
```

 * https://www.academia.edu/3754400/Online_Recruitment_System_PROJECT

 * https://www.slideshare.net/masterpiyush/documentation-18684935?next_slideshow=1

 * http://services.lovelycoding.org/recruitment-management-system/


## Technology

+ UI server: nextjs 

 - Superior Performance: On slower devices, rendering an initial page can take a long time and lead to a degraded experience. By offloading the computation to a more powerful server, you minimize the time users spend waiting and ensure your conversion rate does not suffer.
 - Optimized for Discovery: SSR guarantees your pages are easily indexable by search engines and previewable on social media platforms. Client-side routing solutions can delay web crawling and in turn, tarnish discoverability. Take your SEO to the next level and sidestep the issue entirely with Next.js.
 - Lightning Fast Delivery: Prefetching initial data and building pages on the server drastically reduces the number of round trips required to view your site. This translates to lower latency and reduced bandwidth consumption. Both of which are essential for strong mobile experiences.
 - Infinitely Scalable: When it comes to dynamic applications, scalability is often a concern. Fortunately, Next.js supports serverless builds out of the box. Simply set the target and Next.js will output an SSR-equipped lambda for each page which can be instantly deployed to platforms like Now 2.0.

+ Api server: nodejs + (express or restify)
  - It is asynchronous and event Driven
  - Fast
  - Single Threaded but Highly Scalable
  - No Buffering
+ Database: 

 - MariaDB includes a wide selection of storage engines, including high-performance storage engines, for working with other RDBMS data sources
 - MariaDB uses a standard and popular querying language.
 - Capable to handle advance search feature
 - MariaDB also offers many operations and commands unavailable in MySQL, and eliminates/replaces features impacting performance negatively
 - MariaDB runs on a number of operating systems and supports a wide variety of programming languages.

