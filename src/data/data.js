const data = [
  {
    title: "Python",
    types: [
      {
        subtitle: "Python",
        desc: [
          {
            logo: "https://images.javatpoint.com/images/homeicon/python.png",
            qa: [
              {
                question: "What is Python?",
                answer:
                  "Python is a high-level programming language known for its readability and versatility.",
              },
              {
                question: "How do you declare a variable in Python?",
                answer:
                  "In Python, variables are declared by simply assigning a value to a name: `x = 10`.",
              },
              {
                question: "What are Python's key features?",
                answer:
                  "Python is easy to learn, open-source, and supports object-oriented, imperative, and functional programming styles.",
              },
              {
                question: "What is a Python library?",
                answer:
                  "A Python library is a collection of pre-written code that you can use in your projects.",
              },
              {
                question: "How do you handle exceptions in Python?",
                answer:
                  "Exceptions in Python can be handled using `try` and `except` blocks.",
              },
              {
                question: "What is a Python list?",
                answer:
                  "A list is a collection of items in a particular order, which can be changed or modified.",
              },
              {
                question:
                  "What is the difference between `==` and `is` in Python?",
                answer:
                  "`==` checks for equality of values, while `is` checks for object identity.",
              },
              {
                question: "What is Python's `self` keyword?",
                answer:
                  "`self` refers to the instance of the class and is used to access class attributes and methods.",
              },
              {
                question: "How does Python handle memory management?",
                answer:
                  "Python uses automatic garbage collection and memory management via reference counting.",
              },
              {
                question: "What is a lambda function in Python?",
                answer:
                  "A lambda function is a small anonymous function defined using the `lambda` keyword.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Selenium Python",
        desc: [
          {
            logo: "https://images.javatpoint.com/images/homeicon/selenium-python.png",
            qa: [
              {
                question: "What is Selenium?",
                answer:
                  "Selenium is a web automation tool used for automating browsers.",
              },
              {
                question: "How do you install Selenium in Python?",
                answer:
                  "You can install Selenium using `pip install selenium`.",
              },
              {
                question: "What are the main components of Selenium?",
                answer: "Selenium consists of WebDriver, Grid, and IDE.",
              },
              {
                question: "How do you locate an element in Selenium?",
                answer:
                  "Elements can be located using methods like `find_element_by_id()`, `find_element_by_name()`, etc.",
              },
              {
                question: "What is WebDriver in Selenium?",
                answer:
                  "WebDriver is an interface that allows interaction with web browsers.",
              },
              {
                question: "How do you handle alerts in Selenium?",
                answer: "You can handle alerts using `driver.switch_to.alert`.",
              },
              {
                question:
                  "What is the difference between Selenium WebDriver and Selenium RC?",
                answer:
                  "WebDriver interacts directly with the browser, while Selenium RC requires a server.",
              },
              {
                question: "How do you take a screenshot in Selenium?",
                answer:
                  "Use `driver.get_screenshot_as_file()` to capture a screenshot.",
              },
              {
                question: "How can you handle cookies in Selenium?",
                answer:
                  "You can handle cookies using `driver.get_cookies()` and `driver.add_cookie()`.",
              },
              {
                question: "What is Selenium Grid?",
                answer:
                  "Selenium Grid allows running tests on multiple machines in parallel to speed up test execution.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Django",
        desc: [
          {
            logo: "https://images.javatpoint.com/images/homeicon/django.png",
            qa: [
              {
                question: "What is Django?",
                answer:
                  "Django is a high-level Python web framework that allows rapid development of secure and maintainable websites.",
              },
              {
                question: "How do you create a Django project?",
                answer:
                  "You can create a Django project by running `django-admin startproject projectname`.",
              },
              {
                question: "What is a Django model?",
                answer:
                  "A Django model is a Python class that defines the structure of your database.",
              },
              {
                question: "What are Django views?",
                answer:
                  "Django views are Python functions that handle user requests and return responses.",
              },
              {
                question: "How do you start a Django server?",
                answer:
                  "Use the command `python manage.py runserver` to start the development server.",
              },
              {
                question: "What is a Django template?",
                answer:
                  "A Django template is an HTML file containing placeholders for dynamic data.",
              },
              {
                question: "What is Django ORM?",
                answer:
                  "Django ORM (Object-Relational Mapping) is a tool for interacting with the database using Python objects.",
              },
              {
                question: "What are Django migrations?",
                answer:
                  "Migrations are a way to propagate changes made to your models into the database schema.",
              },
              {
                question: "What is the Django admin interface?",
                answer:
                  "The Django admin interface is a built-in tool for managing the site's content.",
              },
              {
                question: "What is a Django form?",
                answer:
                  "Django forms are used for handling user input in web applications.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Flask",
        desc: [
          {
            logo: "https://images.javatpoint.com/images/homeicon/flask.png",
            qa: [
              {
                question: "What is Flask?",
                answer:
                  "Flask is a lightweight Python web framework used for building web applications.",
              },
              {
                question: "How do you install Flask?",
                answer: "You can install Flask using `pip install flask`.",
              },
              {
                question: "What is a Flask route?",
                answer:
                  "A route in Flask maps a URL to a function that handles the request.",
              },
              {
                question: "What is a Flask template?",
                answer:
                  "A Flask template is an HTML file that allows you to insert dynamic content into the HTML.",
              },
              {
                question: "What is Flask's request object?",
                answer:
                  "Flask's request object allows you to access data sent by the user in HTTP requests.",
              },
              {
                question: "How do you run a Flask app?",
                answer: "You can run a Flask app using `python app.py`.",
              },
              {
                question: "What is Flask's session?",
                answer:
                  "Flask's session allows you to store user-specific data between requests.",
              },
              {
                question: "What is Flask's `render_template`?",
                answer:
                  "The `render_template` function in Flask is used to render HTML templates.",
              },
              {
                question: "What is Flask's `url_for`?",
                answer:
                  "The `url_for` function generates a URL for a specific function in your Flask app.",
              },
              {
                question: "What is Flask-SQLAlchemy?",
                answer:
                  "Flask-SQLAlchemy is an extension for Flask that adds support for SQLAlchemy, a database toolkit.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "NumPy",
        desc: [
          {
            logo: "https://images.javatpoint.com/images/homeicon/numpy.png",
            qa: [
              {
                question: "What is NumPy?",
                answer:
                  "NumPy is a Python library for numerical computing that supports large multidimensional arrays and matrices.",
              },
              {
                question: "How do you install NumPy?",
                answer: "You can install NumPy using `pip install numpy`.",
              },
              {
                question: "What is a NumPy array?",
                answer:
                  "A NumPy array is a grid of values, all of the same type, that can be indexed by a tuple of nonnegative integers.",
              },
              {
                question: "How do you create a NumPy array?",
                answer: "You can create a NumPy array using `np.array()`.",
              },
              {
                question: "What is broadcasting in NumPy?",
                answer:
                  "Broadcasting allows NumPy to perform element-wise operations on arrays of different shapes.",
              },
              {
                question: "What is NumPy's `ndarray`?",
                answer:
                  "`ndarray` is a core object of NumPy that represents a multidimensional array.",
              },
              {
                question: "What is NumPy's `reshape`?",
                answer:
                  "The `reshape()` function allows you to change the shape of an array without changing its data.",
              },
              {
                question: "How do you perform matrix multiplication in NumPy?",
                answer:
                  "You can perform matrix multiplication using `np.dot()` or the `@` operator.",
              },
              {
                question:
                  "What is the difference between a list and a NumPy array?",
                answer:
                  "NumPy arrays are faster and more efficient for numerical operations compared to Python lists.",
              },
              {
                question: "What is NumPy's `axis`?",
                answer:
                  "In NumPy, `axis` refers to the dimension along which a function operates.",
              },
            ],
          },
        ],
      },
      // Add more subtitles here like Tkinter, Pytorch, Pygame, etc., following the same structure.
    ],
  },
  {
    title: "Java",
    types: [
      {
        subtitle: "Java",
        desc: [
          {
            logo: "https://images.javatpoint.com/images/homeicon/new/core-java.png",
            qa: [
              {
                question: "What is Java?",
                answer:
                  "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
              },
              {
                question: "What are the key features of Java?",
                answer:
                  "Java is platform-independent, object-oriented, secure, and supports multithreading, among other features.",
              },
              {
                question: "What is the `main` method in Java?",
                answer:
                  "The `main` method is the entry point of any Java application. It's where the program starts execution.",
              },
              {
                question:
                  "What is the difference between `==` and `equals()` in Java?",
                answer:
                  "`==` checks if two objects reference the same memory location, while `equals()` compares the content of two objects.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Servlet",
        desc: [
          {
            logo: "https://images.javatpoint.com/images/homeicon/new/servlet.png",
            qa: [
              {
                question: "What is a Servlet?",
                answer:
                  "A Servlet is a Java programming language class used to extend the capabilities of a server by generating dynamic content.",
              },
              {
                question: "What are the different types of Servlets?",
                answer:
                  "There are two main types of Servlets: GenericServlet and HttpServlet.",
              },
              {
                question: "What is the life cycle of a Servlet?",
                answer:
                  "The life cycle of a Servlet includes the following stages: initialization, request handling, and destruction.",
              },
              {
                question: "How do you configure a Servlet?",
                answer:
                  "A Servlet is configured in the `web.xml` deployment descriptor or through annotations in Java.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "JSP",
        desc: [
          {
            logo: "https://images.javatpoint.com/images/homeicon/jsp.png",
            qa: [
              {
                question: "What is JSP?",
                answer:
                  "JSP (Java Server Pages) is a technology used to create dynamic, platform-independent web pages based on HTML, XML, or other document types.",
              },
              {
                question: "What is the difference between JSP and Servlets?",
                answer:
                  "JSP allows for embedding Java directly into HTML, while Servlets are Java classes that handle requests and responses.",
              },
              {
                question: "What are JSP tags?",
                answer:
                  "JSP tags are used to perform actions like displaying data, controlling the flow of the page, or performing business logic.",
              },
              {
                question: "What is the role of the `page` directive in JSP?",
                answer:
                  "The `page` directive defines properties of the JSP page, like language, content type, and buffer size.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Spring Boot",
        desc: [
          {
            logo: "https://images.javatpoint.com/images/homeicon/spring-boot.png",
            qa: [
              {
                question: "What is Spring Boot?",
                answer:
                  "Spring Boot is a framework that simplifies the development of Java applications by providing production-ready, stand-alone applications.",
              },
              {
                question: "What are the advantages of Spring Boot?",
                answer:
                  "Spring Boot reduces the complexity of Java development by eliminating the need for boilerplate code and configuration.",
              },
              {
                question: "What is the `@SpringBootApplication` annotation?",
                answer:
                  "The `@SpringBootApplication` annotation is a combination of three annotations: `@Configuration`, `@EnableAutoConfiguration`, and `@ComponentScan`.",
              },
              {
                question: "How do you create a Spring Boot application?",
                answer:
                  "A Spring Boot application can be created by using the Spring Initializr or by manually setting up the dependencies.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Spring Framework",
        desc: [
          {
            logo: "https://images.javatpoint.com/images/homeicon/spring.png",
            qa: [
              {
                question: "What is Spring Framework?",
                answer:
                  "Spring is an open-source framework for building Java-based enterprise applications, providing infrastructure support for developing Java applications.",
              },
              {
                question: "What is Dependency Injection in Spring?",
                answer:
                  "Dependency Injection (DI) is a design pattern in Spring used to remove hard-coded dependencies and make the system more modular.",
              },
              {
                question: "What is Spring MVC?",
                answer:
                  "Spring MVC is a web framework built on the Model-View-Controller design pattern, used to create web applications in Java.",
              },
              {
                question: "What is the purpose of `@Autowired` in Spring?",
                answer:
                  "`@Autowired` is used to automatically wire beans in Spring by matching bean types.",
              },
            ],
          },
        ],
      },

      {
        subtitle: "Java Swing",
        desc: [
          {
            logo: "https://images.javatpoint.com/images/homeicon/new/java-swing.png",
            qa: [
              {
                question: "What is Java Swing?",
                answer:
                  "Java Swing is a part of Java's standard library used to build graphical user interfaces (GUIs) for Java applications.",
              },
              {
                question: "What is the difference between AWT and Swing?",
                answer:
                  "AWT is a set of APIs for building GUI applications, while Swing is a more advanced GUI toolkit that is built on top of AWT.",
              },
              {
                question: "What is a JFrame in Swing?",
                answer:
                  "A JFrame is a top-level container used to hold other Swing components in a graphical user interface.",
              },
              {
                question: "How can you create a button in Swing?",
                answer:
                  "A button in Swing can be created using the `JButton` class, which can be added to a JFrame or JPanel.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    "title": "PHP",
    "types": [
      {
        "subtitle": "PHP",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/logo/php-logo.png",
            "qa": [
              { "question": "What is PHP?", "answer": "PHP is a popular server-side scripting language primarily used for web development, which can also be used as a general-purpose programming language." },
              { "question": "What are the key features of PHP?", "answer": "PHP is open-source, platform-independent, supports a wide range of databases, and has built-in support for handling forms, sessions, and cookies." },
              { "question": "What is the difference between `$_GET` and `$_POST`?", "answer": "`$_GET` is used to collect form data after submitting an HTML form with method GET. `$_POST` is used to collect form data after submitting an HTML form with method POST." },
              { "question": "What is PHP's `isset()` function?", "answer": "`isset()` is used to check if a variable is set and is not null." }
            ]
          }
        ]
      },
      {
        "subtitle": "Framework7",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/framework7/images/framework7-home.jpg",
            "qa": [
              { "question": "What is Framework7?", "answer": "Framework7 is a free and open-source framework for building mobile and web apps with a native-like experience, using HTML, CSS, and JavaScript." },
              { "question": "What are the features of Framework7?", "answer": "Framework7 provides features like a mobile-first grid system, native-like UI components, and support for both iOS and Android platforms." },
              { "question": "How do you create a basic Framework7 app?", "answer": "To create a Framework7 app, include the necessary Framework7 files in your HTML and initialize the app using JavaScript." },
              { "question": "Can Framework7 be used with other front-end libraries?", "answer": "Yes, Framework7 can be used in combination with libraries like React, Vue, or Angular." }
            ]
          }
        ]
      },
      {
        "subtitle": "Laravel",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/tutorial/laravel/images/laravel-home.png",
            "qa": [
              { "question": "What is Laravel?", "answer": "Laravel is a free, open-source PHP web framework that follows the model-view-controller (MVC) architectural pattern and is designed to make web development easier." },
              { "question": "What are the key features of Laravel?", "answer": "Laravel provides built-in support for routing, authentication, sessions, and caching, and includes an ORM called Eloquent." },
              { "question": "How do you define routes in Laravel?", "answer": "Routes in Laravel are defined in the `routes/web.php` file, where you specify URL patterns and the corresponding actions." },
              { "question": "What is Eloquent in Laravel?", "answer": "Eloquent is Laravel's ORM (Object-Relational Mapping) tool that provides a simple and active record implementation for working with database records." }
            ]
          }
        ]
      },
      {
        "subtitle": "WordPress",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/wordpress/images/wordpress.png",
            "qa": [
              { "question": "What is WordPress?", "answer": "WordPress is a content management system (CMS) that allows users to create, manage, and maintain websites easily without the need for extensive technical knowledge." },
              { "question": "What are the features of WordPress?", "answer": "WordPress offers themes and plugins, an easy-to-use editor, a rich community, and is highly customizable for various types of websites." },
              { "question": "How do you install WordPress?", "answer": "You can install WordPress by downloading it from wordpress.org, uploading it to your server, and following the installation wizard." },
              { "question": "What is a WordPress plugin?", "answer": "A WordPress plugin is a piece of software that can be added to a WordPress site to add additional features or functionality." }
            ]
          }
        ]
      },
      {
        "subtitle": "CodeIgniter",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/codeigniter/images/codeigniter-home.png",
            "qa": [
              { "question": "What is CodeIgniter?", "answer": "CodeIgniter is a powerful PHP framework used for developing web applications with a simple toolkit, enabling developers to build dynamic websites and applications." },
              { "question": "What are the benefits of using CodeIgniter?", "answer": "CodeIgniter is lightweight, fast, and requires minimal configuration. It also provides built-in libraries for tasks like database management, form validation, and session management." },
              { "question": "What is the MVC pattern in CodeIgniter?", "answer": "CodeIgniter follows the MVC (Model-View-Controller) design pattern, separating the application logic (Model), UI (View), and user input handling (Controller)." },
              { "question": "How do you load a helper in CodeIgniter?", "answer": "In CodeIgniter, helpers can be loaded by using `$this->load->helper('helper_name');` in your controller." }
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Software Testing",
    "types": [
      {
        "subtitle": "Software Testing",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/software-testing.png",
            "qa": [
              { "question": "What is software testing?", "answer": "Software testing is the process of evaluating and verifying that a software application or system meets the specified requirements and is free from defects." },
              { "question": "What are the different types of software testing?", "answer": "Software testing can be classified into manual testing, automated testing, functional testing, non-functional testing, and performance testing, among others." },
              { "question": "What is the difference between functional and non-functional testing?", "answer": "Functional testing focuses on verifying that the software behaves according to the requirements, while non-functional testing checks aspects like performance, usability, and security." },
              { "question": "What is the purpose of regression testing?", "answer": "Regression testing ensures that new code changes do not negatively impact the existing functionality of the software." }
            ]
          }
        ]
      },
      {
        "subtitle": "Agile",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/agile.png",
            "qa": [
              { "question": "What is Agile?", "answer": "Agile is a project management and software development methodology that emphasizes flexibility, iterative development, and collaboration between cross-functional teams." },
              { "question": "What are the key principles of Agile?", "answer": "The key principles of Agile include customer collaboration, responding to change, delivering working software frequently, and maintaining simplicity in design." },
              { "question": "What is a Scrum framework?", "answer": "Scrum is an Agile framework for managing projects. It divides the work into sprints, with defined roles like Scrum Master, Product Owner, and development team." },
              { "question": "What is a sprint in Agile?", "answer": "A sprint is a time-boxed iteration in Agile development, typically lasting from 1 to 4 weeks, where a specific set of tasks is completed." }
            ]
          }
        ]
      },
      {
        "subtitle": "JIRA",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/jira.png",
            "qa": [
              { "question": "What is JIRA?", "answer": "JIRA is a popular project management and issue tracking tool developed by Atlassian. It is commonly used for tracking software bugs, managing Agile projects, and organizing tasks." },
              { "question": "What is a JIRA issue?", "answer": "A JIRA issue is a task, bug, feature request, or any other work item in JIRA that needs to be tracked and managed." },
              { "question": "What is the difference between a JIRA board and a JIRA project?", "answer": "A JIRA board represents a collection of issues and workflows, while a JIRA project is a container for issues related to a specific project or initiative." },
              { "question": "How do you create a custom workflow in JIRA?", "answer": "Custom workflows in JIRA can be created through the JIRA administration section, where you can design the steps, transitions, and conditions for a given process." }
            ]
          }
        ]
      },
      {
        "subtitle": "Bugzilla",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/bugzilla.png",
            "qa": [
              { "question": "What is Bugzilla?", "answer": "Bugzilla is an open-source bug tracking tool that helps software developers manage and track bugs, issues, and tasks during the software development process." },
              { "question": "What are the main features of Bugzilla?", "answer": "Bugzilla offers features like bug tracking, customizable reports, email notifications, and support for multiple databases and project management tools." },
              { "question": "How do you report a bug in Bugzilla?", "answer": "To report a bug in Bugzilla, you create a new bug report, providing details such as the bug's severity, description, steps to reproduce, and the environment." },
              { "question": "What is the importance of bug prioritization in Bugzilla?", "answer": "Bug prioritization helps teams focus on fixing the most critical issues first, ensuring that the software is stable and functional for users." }
            ]
          }
        ]
      },
      {
        "subtitle": "ETL",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/etl.png",
            "qa": [
              { "question": "What is ETL?", "answer": "ETL stands for Extract, Transform, and Load. It is a data integration process that involves extracting data from various sources, transforming it into a desired format, and loading it into a database or data warehouse." },
              { "question": "What are the different steps in the ETL process?", "answer": "The ETL process consists of three main steps: extraction (getting data from sources), transformation (cleaning and converting data), and loading (storing the data into a target system)." },
              { "question": "What tools are commonly used for ETL?", "answer": "Common ETL tools include Apache Nifi, Talend, Informatica, Microsoft SQL Server Integration Services (SSIS), and Alteryx." },
              { "question": "Why is data transformation important in the ETL process?", "answer": "Data transformation ensures that the data is cleaned, standardized, and structured properly, which is crucial for accurate analysis and reporting." }
            ]
          }
        ]
      }
    ]
  },
  {
    "title": ".NET Framework",
    "types": [
      {
        "subtitle": ".NET",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/dot-net.png",
            "qa": [
              { "question": "What is .NET?", "answer": ".NET is a free, open-source developer platform for building many types of applications. It provides tools, libraries, and runtime to create desktop, web, mobile, cloud, and gaming applications." },
              { "question": "What programming languages can be used with .NET?", "answer": ".NET supports multiple programming languages, including C#, F#, and Visual Basic." },
              { "question": "What is the .NET Core?", "answer": ".NET Core is a cross-platform, open-source version of .NET, which can be used to build applications for Windows, Linux, and macOS." },
              { "question": "What is the difference between .NET and .NET Core?", "answer": ".NET is the full framework, which primarily targets Windows, while .NET Core is a cross-platform version of .NET." }
            ]
          }
        ]
      },
      {
        "subtitle": "C#",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/csharp/images/c-sharp-home.png",
            "qa": [
              { "question": "What is C#?", "answer": "C# (pronounced C-sharp) is a modern, object-oriented programming language developed by Microsoft as part of the .NET framework. It is used for developing a wide range of applications." },
              { "question": "What are the key features of C#?", "answer": "C# supports object-oriented programming, type safety, garbage collection, and features like LINQ, asynchronous programming, and integration with .NET libraries." },
              { "question": "What is the difference between C# and C++?", "answer": "C# is managed code, meaning it runs on the .NET runtime with garbage collection, while C++ is unmanaged code, offering more direct control over memory management." },
              { "question": "What is a delegate in C#?", "answer": "A delegate in C# is a type that represents references to methods with a particular parameter list and return type. They are used to define callback methods." }
            ]
          }
        ]
      },
      {
        "subtitle": "ASP.NET",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/asp/images/asp-net-home.png",
            "qa": [
              { "question": "What is ASP.NET?", "answer": "ASP.NET is a free, open-source web framework developed by Microsoft for building web applications, APIs, and dynamic websites. It is a part of the .NET framework." },
              { "question": "What is the difference between ASP.NET and ASP.NET Core?", "answer": "ASP.NET is the original web framework for .NET that runs on Windows, while ASP.NET Core is a cross-platform, high-performance framework that runs on Windows, Linux, and macOS." },
              { "question": "What are Web Forms in ASP.NET?", "answer": "Web Forms is a component of ASP.NET that allows developers to build dynamic web pages with a drag-and-drop interface and server-side controls." },
              { "question": "What is MVC in ASP.NET?", "answer": "MVC stands for Model-View-Controller, a design pattern used in ASP.NET to separate the application into three interconnected components: Model (data), View (UI), and Controller (logic)." }
            ]
          }
        ]
      },
      {
        "subtitle": "ADO.NET",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/ado/images/ado-net-home.jpg",
            "qa": [
              { "question": "What is ADO.NET?", "answer": "ADO.NET (ActiveX Data Objects) is a set of data access components in the .NET framework used to interact with relational databases, retrieve and manipulate data." },
              { "question": "What are the components of ADO.NET?", "answer": "ADO.NET components include the Connection object, Command object, DataReader, DataAdapter, DataSet, and DataTable." },
              { "question": "What is the difference between DataSet and DataReader?", "answer": "DataReader provides a forward-only, read-only stream of data, while DataSet is an in-memory cache of data that can be worked with in a disconnected mode." },
              { "question": "What is a DataAdapter in ADO.NET?", "answer": "A DataAdapter is a bridge between the DataSet and the data source. It retrieves data from the data source and updates the data source with changes made to the DataSet." }
            ]
          }
        ]
      },
      {
        "subtitle": "WPF",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/tutorial/wpf/images/wpf-home.png",
            "qa": [
              { "question": "What is WPF?", "answer": "WPF (Windows Presentation Foundation) is a graphical subsystem for rendering user interfaces in Windows-based applications, providing support for 2D/3D graphics, animations, and media." },
              { "question": "What is the difference between WPF and WinForms?", "answer": "WPF is more advanced than WinForms and supports richer graphics, data binding, and modern UI capabilities, while WinForms is simpler and is primarily used for traditional desktop applications." },
              { "question": "What is XAML in WPF?", "answer": "XAML (Extensible Application Markup Language) is a declarative language used in WPF to define user interface elements, their properties, and layout." },
              { "question": "What are the main advantages of WPF?", "answer": "WPF provides features like a vector-based rendering engine, support for complex data-binding, styles, templates, and seamless integration with other .NET technologies." }
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "B.Tech/MCA",
    "types": [
      {
        "subtitle": "DBMS",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/dbms.png",
            "qa": [
              { "question": "What is DBMS?", "answer": "A Database Management System (DBMS) is a software system that provides an interface for users to store, modify, and retrieve data from a database." },
              { "question": "What are the types of DBMS?", "answer": "There are four main types of DBMS: Hierarchical, Network, Relational, and Object-Oriented DBMS." },
              { "question": "What is a primary key in a DBMS?", "answer": "A primary key is a unique identifier for a record in a database table, ensuring that each record can be uniquely identified." },
              { "question": "What is normalization?", "answer": "Normalization is the process of organizing data in a database to reduce redundancy and dependency by dividing large tables into smaller ones." }
            ]
          }
        ]
      },
      {
        "subtitle": "Data Structures",
        "desc": [
          {
            "logo":"https://images.javatpoint.com/images/homeicon/data-structures.png",
            "qa": [
              { "question": "What is a Data Structure?", "answer": "A data structure is a way of organizing and storing data in a computer so that it can be accessed and modified efficiently." },
              { "question": "What are the types of data structures?", "answer": "The primary types of data structures are Linear (Array, Linked List, Stack, Queue) and Non-linear (Tree, Graph)." },
              { "question": "What is a stack?", "answer": "A stack is a linear data structure that follows the Last In First Out (LIFO) principle, where elements are added and removed from the top." },
              { "question": "What is a linked list?", "answer": "A linked list is a linear data structure in which elements (nodes) are stored in memory non-contiguously, and each node contains a reference (link) to the next node." }
            ]
          }
        ]
      },
      {
        "subtitle": "DAA",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/daa.png",
            "qa": [
              { "question": "What is DAA?", "answer": "DAA (Design and Analysis of Algorithms) is a branch of computer science that focuses on designing efficient algorithms and analyzing their time and space complexities." },
              { "question": "What is the time complexity of an algorithm?", "answer": "Time complexity refers to the amount of time an algorithm takes to run, usually expressed as a function of the input size (n), such as O(n), O(log n), O(n^2)." },
              { "question": "What is a greedy algorithm?", "answer": "A greedy algorithm is a problem-solving approach that makes the locally optimal choice at each step with the hope of finding the global optimum." },
              { "question": "What is dynamic programming?", "answer": "Dynamic programming is a method for solving problems by breaking them down into smaller subproblems and solving each subproblem only once, storing the results to avoid redundant calculations." }
            ]
          }
        ]
      },
      {
        "subtitle": "Operating System",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/operating-system.png",
            "qa": [
              { "question": "What is an Operating System?", "answer": "An operating system (OS) is system software that manages hardware, software resources, and provides common services for computer programs." },
              { "question": "What are the types of Operating Systems?", "answer": "The main types of operating systems include Batch OS, Time-Sharing OS, Distributed OS, Network OS, and Real-Time OS." },
              { "question": "What is a process in an OS?", "answer": "A process is a program in execution. It contains the program code, its current activity, and the data it is working on." },
              { "question": "What is deadlock in an Operating System?", "answer": "A deadlock is a condition where two or more processes are unable to proceed because each is waiting for the other to release resources." }
            ]
          }
        ]
      },
      {
        "subtitle": "Computer Network",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/computer-network.png",
            "qa": [
              { "question": "What is a Computer Network?", "answer": "A computer network is a collection of computers and devices connected to share resources and communicate with each other." },
              { "question": "What are the types of computer networks?", "answer": "The primary types of computer networks are Local Area Network (LAN), Wide Area Network (WAN), and Metropolitan Area Network (MAN)." },
              { "question": "What is the OSI model?", "answer": "The OSI model (Open Systems Interconnection) is a conceptual framework used to understand network interactions, divided into seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application." },
              { "question": "What is TCP/IP?", "answer": "TCP/IP (Transmission Control Protocol/Internet Protocol) is a set of protocols used to interconnect network devices on the internet, enabling communication between computers." }
            ]
          }
        ]
      },
      {
        "subtitle": "Compiler Design",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/compiler-design.png",
            "qa": [
              { "question": "What is Compiler Design?", "answer": "Compiler design is the process of creating a compiler, which is a software tool that translates high-level programming languages into machine code or intermediate code." },
              { "question": "What are the phases of a compiler?", "answer": "The major phases of a compiler include Lexical Analysis, Syntax Analysis, Semantic Analysis, Optimization, and Code Generation." },
              { "question": "What is a parser in a compiler?", "answer": "A parser is a component of the compiler that analyzes the syntax of the source code to determine its grammatical structure according to a formal grammar." },
              { "question": "What is a lexical analyzer?", "answer": "A lexical analyzer (or lexer) is responsible for breaking the source code into tokens, which are the smallest units of meaningful data in the program." }
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Trending Technology",
    "types": [
      {
        "subtitle": "Angular 8",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/angular-8.png",
            "qa": [
              { "question": "What is Angular 8?", "answer": "Angular 8 is a version of the popular front-end framework Angular, which is used for building dynamic, single-page web applications with a modular and component-based architecture." },
              { "question": "What are the new features in Angular 8?", "answer": "Angular 8 introduced differential loading, lazy loading, dynamic imports, and improved Angular CLI for building modern web applications." },
              { "question": "How is Angular 8 different from previous versions?", "answer": "Angular 8 has improved support for modern JavaScript features, offers faster performance, and better tools for developers with more efficient builds and easier maintenance." },
              { "question": "What is lazy loading in Angular?", "answer": "Lazy loading is a technique where Angular loads only the necessary modules at runtime, which reduces the initial load time of the application." }
            ]
          }
        ]
      },
      {
        "subtitle": "ReactJS",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/react.png",
            "qa": [
              { "question": "What is ReactJS?", "answer": "ReactJS is an open-source JavaScript library used for building user interfaces, especially single-page applications where data changes dynamically." },
              { "question": "What are the advantages of ReactJS?", "answer": "ReactJS provides fast rendering using a virtual DOM, reusable components, and easy integration with other libraries and frameworks." },
              { "question": "What is JSX in React?", "answer": "JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML and is used to describe the UI in React." },
              { "question": "What is the difference between React and Angular?", "answer": "React is a library focused on UI development, while Angular is a full-fledged framework that includes additional features like routing, form management, and HTTP client support." }
            ]
          }
        ]
      },
      
      {
        "subtitle": "Artificial Intelligence",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/artificial-intelligence.png",
            "qa": [
              { "question": "What is Artificial Intelligence?", "answer": "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think, learn, and make decisions like humans." },
              { "question": "What are the different types of AI?", "answer": "AI can be categorized into three types: Narrow AI (specific tasks), General AI (human-level intelligence), and Superintelligent AI (intelligence far surpassing human capabilities)." },
              { "question": "What is Machine Learning?", "answer": "Machine Learning (ML) is a subset of AI that allows systems to learn from data and improve over time without being explicitly programmed." },
              { "question": "What is the difference between AI and Machine Learning?", "answer": "AI is the broader concept of machines performing tasks that require intelligence, while Machine Learning is a specific approach to achieving AI by using algorithms to learn from data." }
            ]
          }
        ]
      },
      {
        "subtitle": "AWS",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/amazon-web-services.png",
            "qa": [
              { "question": "What is AWS?", "answer": "Amazon Web Services (AWS) is a comprehensive and widely adopted cloud platform, offering services like computing power, storage, and databases to help businesses scale and grow." },
              { "question": "What are the key services provided by AWS?", "answer": "AWS provides a variety of services, including EC2 (compute), S3 (storage), RDS (databases), Lambda (serverless computing), and more." },
              { "question": "What is AWS EC2?", "answer": "Amazon EC2 (Elastic Compute Cloud) is a service that allows users to rent virtual servers in the cloud to run applications and workloads." },
              { "question": "What is AWS S3?", "answer": "Amazon S3 (Simple Storage Service) is a scalable object storage service used for storing and retrieving large amounts of data such as backups, files, and images." }
            ]
          }
        ]
      },
      {
        "subtitle": "Cloud Computing",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/cloud-computing.png",
            "qa": [
              { "question": "What is Cloud Computing?", "answer": "Cloud computing refers to the delivery of computing services like storage, processing, and networking over the internet, allowing users to access resources without owning physical infrastructure." },
              { "question": "What are the types of cloud computing?", "answer": "The main types of cloud computing are Public Cloud, Private Cloud, and Hybrid Cloud." },
              { "question": "What is SaaS?", "answer": "Software as a Service (SaaS) is a cloud computing service that provides software applications over the internet, such as email, CRM systems, and collaboration tools." },
              { "question": "What are the benefits of Cloud Computing?", "answer": "Cloud computing offers benefits like cost savings, scalability, accessibility, and increased efficiency by leveraging shared resources." }
            ]
          }
        ]
      },
      
      {
        "subtitle": "Data Science",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/data-science.png",
            "qa": [
              { "question": "What is Data Science?", "answer": "Data Science is a field that combines statistics, mathematics, programming, and domain knowledge to extract insights from data and inform decision-making." },
              { "question": "What is the role of a Data Scientist?", "answer": "A Data Scientist analyzes and interprets complex data to help businesses make data-driven decisions, often using machine learning and statistical models." },
              { "question": "What are the key skills required in Data Science?", "answer": "Key skills for Data Scientists include proficiency in programming languages (Python, R), data visualization, machine learning, statistical analysis, and data wrangling." },
              { "question": "What is machine learning in Data Science?", "answer": "Machine learning is a subset of data science that focuses on building models that can learn from data and make predictions or decisions without being explicitly programmed." }
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Web Technology",
    "types": [
      {
        "subtitle": "HTML",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/logo/html-tutorial.png",
            "qa": [
              { "question": "What is HTML?", "answer": "HTML (HyperText Markup Language) is the standard language used to create and design webpages and web applications." },
              { "question": "What are the different HTML tags?", "answer": "Some of the basic HTML tags are `<html>`, `<head>`, `<body>`, `<div>`, `<p>`, `<a>`, `<img>`, `<form>`, etc." },
              { "question": "What is the purpose of the `<head>` tag in HTML?", "answer": "The `<head>` tag contains meta-information about the document such as the title, links to external files (like CSS), and metadata." },
              { "question": "What is a semantic HTML element?", "answer": "Semantic HTML elements clearly describe their meaning in a human- and machine-readable way, such as `<header>`, `<footer>`, and `<article>`." }
            ]
          }
        ]
      },
      {
        "subtitle": "CSS",
        "desc": [
          {
            "logo":"https://images.javatpoint.com/images/logo/css3.jpg",
            "qa": [
              { "question": "What is CSS?", "answer": "CSS (Cascading Style Sheets) is used to control the style and layout of HTML elements, such as colors, fonts, and positioning." },
              { "question": "What is the difference between inline, internal, and external CSS?", "answer": "Inline CSS is written within the HTML element using the `style` attribute, internal CSS is written in the `<style>` tag within the `<head>`, and external CSS is written in separate `.css` files linked to the HTML document." },
              { "question": "What is a CSS selector?", "answer": "A CSS selector is a pattern used to select and apply styles to HTML elements. Examples include class selectors (`.class`), ID selectors (`#id`), and element selectors (`div`, `p`)." },
              { "question": "What is the `box-model` in CSS?", "answer": "The CSS box model describes the rectangular boxes generated for elements, consisting of margins, borders, padding, and the actual content area." }
            ]
          }
        ]
      },
      {
        "subtitle": "JavaScript",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/logo/javascripthome.png",
            "qa": [
              { "question": "What is JavaScript?", "answer": "JavaScript is a programming language that enables interactive web pages, used for front-end development and can also be used for server-side development." },
              { "question": "What is the difference between `var`, `let`, and `const` in JavaScript?", "answer": "`var` is function-scoped, `let` is block-scoped and can be reassigned, and `const` is block-scoped but cannot be reassigned after initialization." },
              { "question": "What are JavaScript closures?", "answer": "A closure is a function that retains access to its lexical scope even when the function is executed outside of that scope." },
              { "question": "What is a promise in JavaScript?", "answer": "A promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation." }
            ]
          }
        ]
      },
     
   
      {
        "subtitle": "XML",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/logo/xml-home.png",
            "qa": [
              { "question": "What is XML?", "answer": "XML (Extensible Markup Language) is a markup language used to store and transport data in a human-readable and machine-readable format." },
              { "question": "What is the purpose of the XML declaration?", "answer": "The XML declaration defines the version of XML being used and the character encoding for the document, e.g., `<?xml version='1.0' encoding='UTF-8'?>`." },
              { "question": "What is the difference between XML and HTML?", "answer": "XML is used for data storage and transport, while HTML is used for displaying data in web browsers." },
              { "question": "What is an XML schema?", "answer": "An XML schema defines the structure, content, and data types of an XML document, ensuring its validity." }
            ]
          }
        ]
      },
     
      {
        "subtitle": "Bootstrap",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/bootstrappages/images/bootstrap-logo.jpg",
            "qa": [
              { "question": "What is Bootstrap?", "answer": "Bootstrap is an open-source CSS framework used to build responsive, mobile-first web pages with a set of pre-designed components." },
              { "question": "What are the key features of Bootstrap?", "answer": "Bootstrap offers features like a responsive grid system, pre-built UI components, and custom JavaScript plugins." },
              { "question": "What is a Bootstrap grid system?", "answer": "The Bootstrap grid system is a set of classes that allows you to create flexible layouts by dividing the page into 12 columns." },
              { "question": "How do you use Bootstrap's components?", "answer": "To use Bootstrap components, you include the Bootstrap CSS and JavaScript files and use the predefined classes in your HTML elements." }
            ]
          }
        ]
      },
     
    
      {
        "subtitle": "Node.js",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/js/nodejs/images/nodejs-logo.png",
            "qa": [
              { "question": "What is Node.js?", "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript code outside of the browser, typically on the server." },
              { "question": "What are the advantages of using Node.js?", "answer": "Node.js provides non-blocking, event-driven architecture, making it suitable for building scalable network applications like web servers and real-time apps." },
              { "question": "What is the `require()` function in Node.js?", "answer": "`require()` is used to import modules or files into a Node.js application." },
              { "question": "What is the `npm` in Node.js?", "answer": "`npm` (Node Package Manager) is a tool used to manage dependencies and install libraries for Node.js projects." }
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Database",
    "types": [
      {
        "subtitle": "SQL",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/sql.png",
            "qa": [
              { "question": "What is SQL?", "answer": "SQL (Structured Query Language) is a standard programming language used to manage and manipulate relational databases." },
              { "question": "What is a primary key in SQL?", "answer": "A primary key is a unique identifier for a record in a table, ensuring that no two rows have the same primary key value." },
              { "question": "What is the difference between `INNER JOIN` and `OUTER JOIN`?", "answer": "An `INNER JOIN` returns records with matching values in both tables, while an `OUTER JOIN` returns all records from one table and the matched records from the other table." },
              { "question": "What is a foreign key?", "answer": "A foreign key is a column or group of columns in a table that links to the primary key of another table." }
            ]
          }
        ]
      },
      {
        "subtitle": "PL/SQL",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/pl-sql.png",
            "qa": [
              { "question": "What is PL/SQL?", "answer": "PL/SQL (Procedural Language/SQL) is Oracle's procedural extension for SQL, allowing the creation of complex queries, stored procedures, and functions." },
              { "question": "What are the types of PL/SQL blocks?", "answer": "PL/SQL blocks consist of three sections: Declaration, Execution, and Exception handling." },
              { "question": "What is a stored procedure in PL/SQL?", "answer": "A stored procedure is a set of SQL statements that can be executed as a unit in PL/SQL. It is stored in the database and can be invoked by other applications." },
              { "question": "What is an exception in PL/SQL?", "answer": "An exception in PL/SQL is an error that occurs during the execution of a program. Exceptions can be handled with custom exception handlers." }
            ]
          }
        ]
      },
      {
        "subtitle": "MySQL",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/mysql.png",
            "qa": [
              { "question": "What is MySQL?", "answer": "MySQL is an open-source relational database management system (RDBMS) based on SQL, commonly used for web applications." },
              { "question": "How do you create a table in MySQL?", "answer": "You can create a table in MySQL using the `CREATE TABLE` statement, followed by the table name and column definitions." },
              { "question": "What is normalization in MySQL?", "answer": "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity." },
              { "question": "What is the difference between `DELETE` and `TRUNCATE` in MySQL?", "answer": "The `DELETE` statement removes rows from a table based on a condition, whereas `TRUNCATE` removes all rows from a table without logging individual row deletions." }
            ]
          }
        ]
      },
      {
        "subtitle": "MongoDB",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/mongodb.png",
            "qa": [
              { "question": "What is MongoDB?", "answer": "MongoDB is a NoSQL, document-oriented database system that stores data in flexible, JSON-like documents, rather than using traditional tables." },
              { "question": "What is a document in MongoDB?", "answer": "A document in MongoDB is a set of key-value pairs, similar to JSON, that stores data in collections." },
              { "question": "What is the difference between MongoDB and SQL databases?", "answer": "MongoDB is a NoSQL database that stores data in documents, while SQL databases store data in tables with a fixed schema." },
              { "question": "What is indexing in MongoDB?", "answer": "Indexing in MongoDB is used to improve the performance of queries by allowing faster searches of documents in collections." }
            ]
          }
        ]
      },
      {
        "subtitle": "PostgreSQL",
        "desc": [
          {
            "logo": "https://images.javatpoint.com/images/homeicon/postgresql.png",
            "qa": [
              { "question": "What is PostgreSQL?", "answer": "PostgreSQL is an open-source relational database management system (RDBMS) that uses and extends SQL, offering advanced features like support for JSON and custom data types." },
              { "question": "What is a `schema` in PostgreSQL?", "answer": "A schema in PostgreSQL is a logical grouping of database objects, such as tables, views, and indexes, within a database." },
              { "question": "What are the types of joins in PostgreSQL?", "answer": "PostgreSQL supports several types of joins, including `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, and `FULL OUTER JOIN`." },
              { "question": "What is the `EXPLAIN` statement in PostgreSQL?", "answer": "The `EXPLAIN` statement in PostgreSQL is used to display the execution plan for a query, helping to analyze and optimize the query performance." }
            ]
          }
        ]
      }
    ]
  }
  

  
  
  
  
];
export default data;
