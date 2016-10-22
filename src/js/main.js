import $ from 'jquery';
import { makeRequest } from "./soundcloud.js";
import { displayResults } from "./template.js";
// import { logData } from "./soundcloud.js"


makeRequest.then(displayResults);
// makeRequest.then(logData);
