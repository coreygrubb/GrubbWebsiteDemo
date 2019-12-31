"use strict";

const UserAction = async () => {
    const response = await fetch('https://eel4uwkil0.execute-api.us-east-2.amazonaws.com/PROD/my-resource/?followers=12');
    const myJson = await response.json();

    var githubResponse = JSON.parse(myJson.body);
    $('#name').html(githubResponse.name);
    $('#url').html(githubResponse.url);
};