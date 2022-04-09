Step 0 - Firstly I throughly read over the excercise breif and broke down the task into smaller pices to see what was required:

**Post:
        **Post Type**                  **Fields**
           Podcast             Subject, Duration, Media Link
           PollutionSnapshot   Location, Date, pollution Levels
           Reports             FirstCreated, Last Reviewed, Contributers
           
**Accessibility:** Langeuage change
**Styling:** Using CSS

Step 1 - So to start of I signed up to a hosting site being Hostringerand installed a fresh copy of Worpress 5.9.2 on to the server 

Step 2 - I then made a GIT Repository 

Step 3 - I then used SSH (PUTTY) to access the hosting server and connect and upload the wp-content folder to the git repo

step 4 - After connecting them I done an initial upload of just the worpress core files to the git repo

Step 5 - To keep wordpress as speedy as possible I removed all the pre installed plugins and made a commit

step 6 - I then downlaoded the follwoing plugins to perform the tak at hand

         Advanced Custom Fields - To create the actual fields with the right field type that the content user will fill out
         Custom Post Type UI - This was used to view the custom posts in GUI interface on the worpress panel
         Weglot Translate - A plugin to serve accessbility by changing the language 
         Yoast SEO - To optamise the Website for search engine
        
Step 7 - Made another commit to upload these plugins

Step 8 - So firstly I set up the Podcast  Post type in the Custom Post Type UI plugin the post type will be on the side panel of wordpress admin

Step 9 - I then setup the fields (Subject, Duration, Media Link) for the Podcasts in the Advanced Custom Fields plug ins 
whilst assigning the right data type to each field

step 10 - I then wrote up php some code output the data inputed in the ACF to viewed in a table format
whilist also running some validation and pagenation underneath each post 

Step 11 - Step 9,10 where repeated for the othe two post typesmn

  

         
         
