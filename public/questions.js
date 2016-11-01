/* 2-JoinsRefresher
 * -/-/-/-/-/-/-/-/ */


// STUDENTS: HOW WOULD YOU ACCOMPLISH THESE JOINS?
// ===============================================

// Before anything, run the commands laid out in the schema.sql file


// 1. How would we grab every app in our database released for both Android and ios (using the string 'both', not the int 3)
// ===

SELECT app FROM appsLEFT JOIN as ON apps.os_id-os_id WHERE os.os="both"

App.hasOne(models.OS);
apps.getOS();
// 2. How would we grab only the app made by Apple (using Apple's name, not their id)
// ===

SELECT app FROM apps LEFT JOIN devs ON devs.id=apps.d_id WHERE dev="Apple"
App.hasONe(models.Dev)
app.getDev()

// 3. How would we display all app info except ids, including the name of the dev and the name of os
// NOTE: THIS IS A HARD ONE
// ===
SELECT  apps.app,devs.dev, os.os  from apps JOIN as ON apps.os_id=os_id JOIN devs ON apps.d_id-devs_id;
App.hasOne(models.OS)
App.hasOne(modes.Dev)
App.findAll( include:[{model:OS},mode:Dev])