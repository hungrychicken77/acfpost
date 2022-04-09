Step 0 - Firstly I throughly read over the excercise breif and broke down the task into smaller pices to see what was required:

**Post:
        **Post Type**                  **Fields**
           Podcast             Subject, Duration, Media Link
           PollutionSnapshot   Location, Date, pollution Levels
           Reports             FirstCreated, Last Reviewed, Contributers
           
**Accessibility:** Langeuage change
**Styling:** Using CSS

Step 1 - So to start of I signed up to a hosting site being Hostringer and installed a fresh copy of Worpress 5.9.2 core files on to the server 

Step 2 - I then made a GIT Repository 

Step 3 - I then used SSH (PUTTY client) to access the hosting server and connect and upload the wp-content folder to the Git Repository

step 4 - After connecting them I pushed an initial upload of just the worpress core files to the Git Repo

Step 5 - To keep wordpress as speedy as possible I removed all the pre-installed plugins and pushed a commit

step 6 - I then downloaded the following plugins to perform the task at hand

         Advanced Custom Fields - To create the actual fields with the right field type that the content producer will fill out
         Custom Post Type UI - This was used to view the custom posts in GUI interface on the worpress panel
         Weglot Translate - A plugin to serve the accessbility aspect by changing the language of the site
         Yoast SEO - To optamise the Website for search engine
        
Step 7 - Made another commit to upload these plugins

Step 8 - So firstly I set up the Podcast Post type in the Custom Post Type UI plugin the custom post type will be on the side panel of wordpress admin

Step 9 - I then setup the fields (Subject, Duration, Media Link) for the Podcasts in the Advanced Custom Fields plug ins 
whilst assigning the right data type to each field i.e. Media Link = URL

Step 10 - I then wrote up php some code to output the data inputed in the custom fields on each post to be viewed in a table format
whilist also running some validation and pagination underneath each post 

Step 11 - Step 9,10 were repeated for the other two post types

Step 12 - These updates were pushed to the Git Repository 

Step 13 - Added three pages to show the archives of posts related to each post type

Step 13 - Made major CSS updates to the overall site 

       The nav menu 
       Overall colour scheme
       Page layouts
       Page paddings and margins
       Initiated the Weblot Translate and set it up on the navigation bar
       
step 14 - Went over the whole site to fixed any minor issues and then Pushed all these updates to the Git Repository 
       

  

         
         
