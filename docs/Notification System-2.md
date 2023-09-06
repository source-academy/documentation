**Notification System**

**1.     System Design**

Given that the scope of this project involves enhancing an existing notification system to establish a strong foundation for subsequent development and feature expansion, the design process necessitates a macroscopic perspective to consider the overall design approach. After thorough consideration, I have categorized notifications within the notification system into three distinct types.

The first type is the "triggered notification," which refers to notifications that should be dispatched immediately upon the occurrence of an event. For instance, when a student submits an assessment, an immediate notification should be sent to the avenger.

 

The second type is the "scheduled notification," where notifications are meant to be sent before specific time-bound events as reminders.

 

The third type encompasses "periodic notifications," which represent recurring tasks. An example of this is a weekly report concerning the avenger's work status.

Among these three notification types, only the "scheduled notification" is connected to the "time_option" setting. For instance, in the case of notifications reminding students to submit assignments, if the "time_option" for this notification type is set with a minute’s value of 60, students will receive an email reminder one hour before the assignment deadline.

 

The procedure for scheduling and dispatching a notification is outlined below:

1. An event initiates the insertion of a notification task into the Oban queue.

2. The queue establishes the appropriate time for executing the task and designates a worker to handle it.

3. The worker evaluates whether the notification is eligible for dissemination based on configurations and preferences.

4. If deemed suitable, the worker proceeds to distribute the notification using various communication channels.

![image-20230906213232386](C:\Users\86176\AppData\Roaming\Typora\typora-user-images\image-20230906213232386.png)

Figures1. System design of notification system

**2. Database Implementation**

From a database design perspective, in response to the operational requirements of the notification system logic, the database schema of the existing Source Academy system has been expanded to incorporate four additional tables: "notification type," "notification config," "notification preference," and "time option." The nomenclature and objectives of these newly introduced tables are elaborated in detail in Table 1. 

introduced tables are elaborated in detail in Table 1. 

| **Table  Name**         | **Purpose**                                                  |
| ----------------------- | ------------------------------------------------------------ |
| notification_type       | Unique  type list of notifications Source Academy offers     |
| notification_config     | Course/Assessment-specific  notifications and its configurations by educators |
| notification_preference | Preferences  of recipients for specific notifications        |
| time_option             | Stores the  possible options for each notification           |

Table 1. Purpose of each notification related table

The "notification_type" table stores a distinct list of notification types provided by Source Academy. The attributes, data types, and their respective meanings can be observed in Table 2.

| **Column  Name**   | **Type** | **Purpose**                                                  |
| ------------------ | -------- | ------------------------------------------------------------ |
| id                 | int      | ID  number of the notification type                          |
| name               | string   | Notification  name                                           |
| template_file_name | string   | Name of the  email template                                  |
| is_autopopulated   | boolean  | Notification  are auto populated when a course or assessment type is created. |
| is_enabled         | boolean  | True if this  notification is enabled system-wide            |

Table 2. Description of the "notification_type" table

 

The "notification_config" table is responsible for storing course or assessment-specific notifications and their corresponding configurations set by educators. Detailed information about the attributes, data types, and the intended purposes of these attributes can be found in Table 3.

| **Column  Name**     | **Type** | **Purpose**                                                  |
| -------------------- | -------- | ------------------------------------------------------------ |
| id                   | int      | ID number of the notification configuration                  |
| notification_type_id | int (FK) | The  notification type this configuration belongs to         |
| course_id            | int (FK) | The course  this configuration belongs to                    |
| assessment_config_id | int (FK) | The assessment  configuration this belongs to                |
| is_enbaled           | boolean  | True is this  notification is enabled course-wide/assessment-wide |

Table 3. Description of the " notification_config " table

 

The "notification_preferences" table is responsible for storing preferences of recipients for specific notifications. Detailed information about the attributes, data types, and the intended purposes of these attributes can be found in Table 4.

| **Column  Name**       | **Type** | **Purpose**                                            |
| ---------------------- | -------- | ------------------------------------------------------ |
| id                     | int      | ID number of the notification preferences              |
| is_enbaled             | boolean  | Recipient's preference for enabling or disabling       |
| notification_config_id | int (FK) | The  notification configuration this preference is for |
| course_reg_id          | int (FK) | The course registration  that made this preference     |

Table 4. Description of the " notification_preferences " table

 

The " time_options " table is responsible for storing he possible options for each notification. Detailed information about the attributes, data types, and the intended purposes of these attributes can be found in Table 5.

| **Column  Name**       | **Type** | **Purpose**                                                  |
| ---------------------- | -------- | ------------------------------------------------------------ |
| id                     | int      | ID  number of the time options                               |
| notification_config_id | int (FK) | The  notification configuration this time options belongs to |
| minutes                | int      | Number of  minutes before event to send a reminder           |
| is_default             | boolean  | If set to  true, it indicates a default event configured by the admin. If set to false,  it indicates a preferred time set by the recipients. |

Table 5. Description of the " time_options " table

These databases are written into the tables of the project's PostgreSQL database in the form of migrations, but the Elixir Phoenix framework also introduces a database abstraction layer such as Ecto. In the Ecto database, the table definitions remain consistent with the PostgreSQL database. The advantages introduced by Ecto are as follows:

1. Layered Architecture: The introduction of Ecto enables the application to adopt a layered architecture, separating database-related logic from the rest of the application. This separation contributes to the maintainability and scalability of the codebase.

2. ORM Functionality: Ecto provides Object-Relational Mapping (ORM) capabilities, allowing developers to interact with the database using object-oriented programming paradigms. This eliminates the need for manual SQL query writing, enhancing development efficiency and convenience.

3. Query Builder: Ecto offers a powerful query builder that allows developers to construct complex database queries in a more intuitive manner. This reduces the complexity of writing raw SQL queries and makes queries more readable and maintainable.

4. Data Validation and Transformation: Ecto enables developers to define models that include data validation rules and transformation functions. This ensures that data is validated before storage and appropriately transformed when retrieved from the database, enhancing data integrity and consistency.

5. Transaction Management: Ecto provides robust transaction management functionality, allowing developers to maintain data consistency and integrity within complex sequences of operations.

 

In the notification.ex file, functions for CRUD operations corresponding to various tables are defined. Taking the time_options table as an example, the list of functions related to it can be found in Table 6.

| **Function  Name**          | **Parameter**                |
| --------------------------- | ---------------------------- |
| get_time_option             | id                           |
| get_time_options_for_config | notification_config_id       |
| create_time_option          | attrs \\ %{}                 |
| upsert_many_time_options    | time_options                 |
| delete_time_option          | time_option  = %TimeOption{} |
| delete_many_time_options    | to_ids                       |

Table 6. Description of CRUD functions for “time_options"table

 

As shown in Figure 2, the database's relational diagram (DB schema) is illustrated.          

![image-20230906213455140](C:\Users\86176\AppData\Roaming\Typora\typora-user-images\image-20230906213455140.png)                      

Figures 2. The database's relational diagram

 

**3. Backend Implementation**

The backends’ connection between the database and the frontend is of paramount importance in the overall project design. The backend implementation can primarily be elaborated from the following perspectives.

Firstly, the creation of two triggers: The backend has devised two triggers that serve the purpose of automatically generating corresponding notification configuration information upon the creation of a course or assessment. The names and functionalities of these two triggers are outlined in detail in Table 7.



| **Trigger Name**                                          | **Purpose**                                                  |
| --------------------------------------------------------- | ------------------------------------------------------------ |
| populate_notification_   configs_on_new_course            | create  `notification_configs` when a new course is created  |
| populate_notification_configs   _on_new_assessment_config | create `notification_configs` when an assessment  type is created |

Table 7. Description of 2 triggers for notification system

 

Secondly, the implementation of controllers and views is noteworthy. In the new_notifications_view.ex file, numerous templates aligned with the frontend have been defined. For instance, concerning notification configuration, three distinct views templates are present as follows. Their respective names and detailed information are presented in Table 8.

| **View  Name**    | **Purpose**                                                  |
| ----------------- | ------------------------------------------------------------ |
| config.json       | Version of a single notification configuration  view (Brief) |
| config_full.json  | Version of a  single notification configuration view (Detailed) |
| configs_full.json | Version of  multiple notification configuration view (Detailed) |

Table 8. Three distinct views templates for notification configuration

 

Within the controller, leveraging the CRUD functions defined in notification.ex, several functions have been defined that can be directly invoked within the router. These functions utilize view templates to render data that can be seamlessly transmitted to the frontend.

 

Thirdly, integration into the router provides APIs to the frontend. These routes undergo essential course validation and identity authentication to ensure the security of route connections. The routing methods, links involved in the notification system, and their corresponding controllers and functions are enumerated in Table 9.

| **Methods  and Links**                                       | **controllers  and functions**                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| GET   " /v2/courses/:course_id/admin  /notifications/config" | NewNotificationsController,   :all_noti_configs              |
| PUT   " /v2/courses/:course_id/admin  /notifications/config" | NewNotificationsController,    :update_noti_configs          |
| DELETE   "" /v2/courses/:course_id/admin  /notifications/options" | NewNotificationsController,    :delete_time_options          |
| GET      " /v2/courses/:course_id/notifications   /config/user/:course_reg_id" | NewNotificationsController,     :get_configurable_noti_configs |
| PUT   " /v2/courses/:course_id/   notifications/options      | NewNotificationsController,    :upsert_time_options          |
| PUT   " /v2/courses/:course_id   /notifications/preferences" | NewNotificationsController,    :upsert_noti_preferences      |
| GET    " /v2/courses/:course_id/notifications   /options/config/:noti_config_id" | NewNotificationsController,     :get_config_time_options     |

Table 9. Description of API related to the notification system

 

Lastly, within the NotificationWorker file, the two perform functions under Oban contain the business logic for the two functionalities implemented by Junyi and Santosh in the notification system.

 

The first functionality involves notifying staff members after a student submits an assignment, reminding them to commence grading the assignment. The second functionality entails sending a notification to teaching assistants when they accumulate a significant number of ungraded assignments, serving as a reminder to grade these assignments.

 

3.2      Frontend Implementation

 

The frontend of the project is implemented using React and Redux technologies. Consequently, the notification system should align with the entirety of the project. React's component-based development approach enables the division of the interface into independent components, while Redux centralizes the management of application state and logic. This combination enhances code maintainability and reusability. Redux follows the concept of a single data source, where the entire application's state is stored within a unified state object. This simplifies state management and facilitates data sharing across components. With middleware like Redux Saga, Redux can handle asynchronous operations, such as network requests, in an organized and controlled manner. By combining React's asynchronous operations with Redux's middleware, seamless data interaction with the backend can be achieved, resulting in an improved user experience.

 

The notification system primarily encompasses two frontend pages: one dedicated to admin configuration and the other for recipients' notification preferences.

In the admin configuration page, the types of notifications, assessment types, and recipient roles are displayed. For each notification type, administrators can set default reminder times and specify whether notifications of that type are enabled or disabled. Assuming that the existing notification features are time-related, the admin page is illustrated in Figure 6.

![image-20230906213642730](C:\Users\86176\AppData\Roaming\Typora\typora-user-images\image-20230906213642730.png)

Figures 6. The administrative frontend page in notifications system

In the recipients' preference settings page, the types of notifications, assessment types, and recipient roles are also presented. Additionally, the default times set by administrators for each notification type are showcased. Recipients can augment or remove existing reminder times according to their preferences and toggle the notifications on or off for each type. Assuming the existing notification features are time-related, the recipients' page is depicted in Figure 7.

![image-20230906213657669](C:\Users\86176\AppData\Roaming\Typora\typora-user-images\image-20230906213657669.png)

Figures 7. The recipient’s frontend page in notifications system

 

Based on the two functionalities currently implemented in the notification system, the first one entails notifying staff members after a student submits an assignment, reminding them to initiate the grading process. The second function involves sending a notification to teaching assistants when they accumulate a substantial number of ungraded assignments, serving as a reminder to assess these assignments. According to the categorization presented in Section 3.1, the first functionality falls under the "trigger notification" category, while the second one is categorized as "periodic notification." Neither of them is categorized as "scheduled notification," thus they are both independent of "time_option," and the "default reminder" column for these cases should display as "NA."

 

Similarly, the logic applies to the recipients' preference setting page. Therefore, within the existing notification system, the admin and recipients' pages should be represented as depicted in Figure 8 and Figure 9, respectively.

![image-20230906213710969](C:\Users\86176\AppData\Roaming\Typora\typora-user-images\image-20230906213710969.png)

Figures 8. The administrative frontend page in notifications system with NA

![image-20230906213721305](C:\Users\86176\AppData\Roaming\Typora\typora-user-images\image-20230906213721305.png)

Figures 9. The recipient’s frontend page in notifications system with NA

 

 