CAS CS412 PS2: Simple Node App

Requirements
1. An instance of express.Router in a separate route file that is mounted on
the path /ps3 (i.e. app.use(‘/ps3’…)). If you are using express-generator or
Webstorm to set up an empty project, you’ll find example routes in the
/routes folder. Probably the easiest approach is to modify one of those
files, just be sure to mount it in a different spot.

2. A route using the GET method that returns a fixed string, which can be
anything that you like. The response should be a JSON object with one
key/value pair, such as {string: ‘Hey now’}, passed into a Pug template for
rendering. Your Pug page design is up to you, I would suggest keeping it
really simple. Use the same template for all three problems -- Pug provides
conditional statements to hide/show values.

3. A route using the POST method that returns a similar response as b.
above but gets its parameter from the request body rather than the URL
string. (To test this from Postman, select POST as the method, then click
the Body tab. Your input parameter should be an x-www-form-urlencoded
string.) The response should be a JSON object with two key/value pairs,
one for the original string and the second for the length. Pass the object
into a Pug template for rendering.

4. A route using the GET method that reads its input parameter as a named
value on the URL, for example http://localhost:3000/names/Bob, where
Bob is the param. Grab the param and pass it in a JSON object to Pug for
rendering (you should be able to use the same template as in c.).
