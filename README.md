# CS50_FinalProject

 ##Application.py - main functionality
##helpers.py -helper apology and login function
##project.db - database which holds the health, pets, places, users tables
##HTML templates, styles.css

For my CS50 final project I made a web application which I’ve called Fido’s Fitness and Friends which is a web application to track your dogs fitness and search for other pupmates (or playmates).
My inspiration for this application came from my personal experience trying to keep track of the health of one of my dogs this past summer and also a personal desire to tailor a search for playmates for my dog. Think myfitnesspal combined with a platonic version of Tinder, but for dogs!
With this web app users will register by providing their email address, a password and a postal code. Users can’t register twice and must enter a valid postal code based on a database query.
The user will be prompted to login and the home page (My Pets tab) will display all of the pets the user has registered including their information. If the user hasn’t added any pets the app will encourage people to add one on the Add Pet tab.
The user will enter a name, breed or type, sex and DOB for the dog.
Additionally, on this home page, there is a form where the user can enter health information. Right now there are forms for a dogs weight, or exercise amount and then the date of each datapoint.
You can submit those information and then select View Exercise Diary, select the pet and view a plot of their exercise diary.
Another feature of this app is the Find Friends tab where a user can specify which pet they’d like to find friends for. The user specifies location criteria, and information about the other dog and then selects Y or N if they want to find dogs of the same breed.
If there are dogs that match those criteria in the database then the app will return a table with their names, and the contact information (email) of their owner.  If not, the app will return notice that there are no other dogs that match those criteria.
