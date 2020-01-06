"use strict";

const UserAction = async () => {
    var followers = document.getElementById('followers').value;
    const response = await fetch('https://eel4uwkil0.execute-api.us-east-2.amazonaws.com/PROD/my-resource/?followers=' + followers);
    const myJson = await response.json();
    
    try{
        var githubResponse = JSON.parse(myJson.body);

        $('#name').html(githubResponse.name);
        $('#url').html(githubResponse.html_url);
        $('#description').html(githubResponse.description);
    }
    catch(error){
        $('#name').html("");
        $('#url').html("");
        $('#description').html("Unable to find a repository for the supplied number of followers");
    }
};