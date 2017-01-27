(function() {
  'use strict';

  function wordCLoudObjectGen (skills, jobPosting) {


    // var fakeJobForParse = "<p><b>Cook: </b> Part time position working a varied schedule. Schedule will include 20-25 hours a week which will consist of days, afternoon and evening hours as well as weekend shifts. Prior experience working as a cook in a health care setting or other cook experience is a must. Apply online or to learn about additional employment opportunities, please visit our website at www.sunshine.org. Drug Free Workplace. EOE</p><p>Job Type: Part-time</p><p>Required experience:</p><ul><li>Cooking: 1 year</li></ul>";
    //
    // // console.log(takeOutHTMLTags(fakeJobForParse));
    //
    //
    // var fakeSkills = ['agile', 'github', 'css', 'angularjs', 'react', 'nodeJS', 'postgresql', 'mongodb', 'bootstrap', 'javascript', 'materialize', 'es6', 'html5'];
    //
    // var fakeJobDescription = "Job Description As a Gogo Business Aviation Full Stack Web developer JAVA and JavaScript you will contribute to a development team creating a media server/entertainment system for the aviation industry. Think Netflix streaming on airplanes! COME ON BOARD THE GOGO BUSINESS AVIATION ENGINEERING TEAM! How will you make a difference? Full stack software developer who can contribute to client side and server side technologies. Developing web services consumable by single page web application and mobile devices Hands on Development Position – 80% of time coding Provide Level of Effort estimates for requirements Track project tasks, provide status and ensure tasks completed on schedule Troubleshoot defects and code resolutions Contribute to process improvements, including researching and introducing new development tools Guide implementation of best practices for application design/development Strong XP/SCRUM/Agile work ethic – Ability to contribute productively to a fast paced development team, delivering demonstrable code in 2 week increments Ability to comprehensively unit tests your code Contribute to a healthy and collaborative development team with a “Get it Done” work ethic Proven ability to negotiate timeline and architecture across functional teams We connect the aviation industry and its travelers with innovative technology and applications, and we do it all in a high-energy environment that welcomes the next challenge. Be prepared for a dynamic ride with people who are passionate about what they're building. Gogo Business Aviation is an equal opportunity employer and works in compliance with both federal and state laws. We are committed to the concept regarding Equal Employment opportunity. Qualified candidates will be considered for employment regardless of race, color, religion, age, sex, national origin, marital status, medical condition or disability.? The EEO is the law and is available here.Gogo Business Aviation? participates in E-Verify. Details in English and Spanish. Right to Work Statement in English and Spanish. Skills & Requirements Qualifications BS in Computer Science or equivalent work experience 2+ years of experience with software development 1+ years of experience with Java 1+ years of experience with JavaScript Required Skills, Experience and Talents Strong skill in designing and consuming RESTful APIs and building applications with concurrency. Experience with Java, Spring, and Jersey Experience developing with HTML5, CSS, JavaScript, and general Web 2.0 techniques like Angular, Backbone/Marionette, and Node.js Proficient using CSS preprocessors like Stylus, SASS or Less Unit testing experience with tools like Junit, Mockito Mocha, Chai, and Sinon Familiarity with build tools like Maven, Gradle, Brunch, Grunt, and Gulp Experience using SCM tools such as Git. Understanding of the Gitflow workflow Desirable Skills, Experience and Talents Experience with video streaming technologies like Adobe Primetime or Google Widevine Knowledge of Spring Components Has developed single page JavaScript application Comfortable using Intellij based Java development IDE to perform daily development tasks Experience and/or interest in the Airline and/or Telecommunications";

    var words = {};
    console.log(skills);
    words = generateWordsObject(skills, takeOutHTMLTags(jobPosting));

    // console.log(words);



    function convertDescriptionToCommaSeparatedWords (description) {
      var commaSeparatedString = '';
      var processStr = description.toLowerCase();

      for (let i = 0; i < processStr.length; i++) {
        if ((processStr[i] === '.') || (processStr[i] === ';') || (processStr[i] === ':') || (processStr[i] === "'") || (processStr[i] === '"') || (processStr[i] === '/') || (processStr[i] === '(') || (processStr[i] === ')') || (processStr[i] === '!')) {
          console.log('removed by not writing');
        } else {
          if (processStr[i] === ' ') {
            commaSeparatedString += ',';

          } else {
            commaSeparatedString += (processStr[i]);
          }
        }

      }
      // console.log(commaSeparatedString);
      return (commaSeparatedString);
    }

    function takeOutHTMLTags (descriptionString) {
      var filteredDescription = '';
      var write = true;

      for (let i = 0; i < descriptionString.length; i++) {
        if (descriptionString[i] === "<") {
          write = false;
          filteredDescription += ' ';
        }
        if (descriptionString[i] === ">") {
          write = true;
        } else {
          if (write) {
            filteredDescription += descriptionString[i];
          }
        }

      }
      // console.log(filteredDescription);
      return (filteredDescription);
    }


    function generateWordsObject (skillsArr, jobDescriptionStr) {

      var wordsObj = {};



      if (!Array.isArray(skillsArr)) {
        return ('ERROR');
      }
      if (typeof(jobDescriptionStr) !== 'string') {
        return ('ERROR');
      }

      var commaSeparatedDescription = convertDescriptionToCommaSeparatedWords(jobDescriptionStr);

      var descriptionArr = [];
      descriptionArr = commaSeparatedDescription.split(',');

      for (let i = 0; i < skillsArr.length; i++) {
        if (wordsObj[skillsArr[i].toLowerCase()] === undefined) {
          wordsObj[skillsArr[i].toLowerCase()] = 3 + (skillsArr.length - i);
        } else {
          console.log (skillsArr[i] + ' is a duplicated skill');
        }

      }

      for (let j = 0; j < descriptionArr.length; j++) {
        if (wordsObj[descriptionArr[j]] === undefined) {
          wordsObj[descriptionArr[j]] = 6;
        } else {
          wordsObj[descriptionArr[j]] += 6;
        }
      }

      return (wordsObj);


    }

    function arraySwap (referenceArray, index1, index2) {
      [referenceArray[index1], referenceArray[index2]] = [referenceArray[index2], referenceArray[index1]];
    }

    function scrambleArrayOrder (inputArray) {
      var val1 = 0;
      var val2 = 0;

      for (let i = 0; i < inputArray.length; i++) {
        val1 = (Math.floor(Math.random() * inputArray.length));
        val2 = (Math.floor(Math.random() * inputArray.length));
        arraySwap(inputArray, val1, val2);
      }
      return (inputArray);
    }

    function getWordPadding (size) {
      var paddingString = '';
      var paddingSize = 0;
      if (size <= 24) {
        paddingSize = (Math.floor(Math.random()*31)) + 15;
      } else {
        paddingSize = (Math.floor(Math.random()*31)) + 20;
      }
      paddingString = paddingSize + "px";
      return (paddingString);
    }

    function getWordRotation () {
      var rotationValues = ['rotate(0deg)', 'rotate(20deg)', 'rotate(40deg)', 'rotate(320deg)', 'rotate(340deg)', 'rotate(0deg)'];

      var value = (Math.floor(Math.random() * rotationValues.length));

      return (rotationValues[value]);
    }

    function getFontColor () {
      var colourArray = ['#BC440', '#2F637B', '#5C668A', '#080E40', '#D8CB5D'];
      var value = (Math.floor(Math.random() * colourArray.length));

      return (colourArray[value]);
    }

    function getFontWeight(size) {
      if (size <= 6) {
        return('normal');
      }
      if (size <= 24) {
        return('bold');
      }
      if (size <= 56) {
        return('bolder');
      }
      return('bolder');
    }

    function getWordObject(size, key) {
      var singleWordObject = {};

      singleWordObject.text = key.trim();
      singleWordObject.fontSize = size * 3.5;
      singleWordObject.fontWeight = getFontWeight(size);
      singleWordObject.fontColor = getFontColor();
      singleWordObject.rotation = getWordRotation();
      singleWordObject.padding = getWordPadding(size);
      singleWordObject.hoverState = getWordHoverState(size);

      return (singleWordObject);
    }

    function shiftBigWordsToCentre (arrayToOrganize) {
      var midArrayPointIndex = Math.floor(arrayToOrganize.length/2);
      // for (let i = 0; i < midArrayPointIndex; i++){
      //   arraySwap(arrayToOrganize, i, (midArrayPointIndex - i + 1));
      // }
      for (let i = midArrayPointIndex; i > 0; i--) {
        for (let j = 0; j < i; j++) {
          if (arrayToOrganize[j].fontSize > arrayToOrganize[i].fontSize) {
            arraySwap(arrayToOrganize, i, j);
          }
        }
      }
      for (let k = (midArrayPointIndex+1); k < arrayToOrganize.length; k++) {
        for (let l = (arrayToOrganize.length - 1); l > (midArrayPointIndex+1); l--) {
          if (arrayToOrganize[l].fontSize > arrayToOrganize[k].fontSize) {
            arraySwap(arrayToOrganize, k, l);
          }
        }
      }
      arrayToOrganize.pop();
      return (arrayToOrganize);
    }

    function tripLargeResults (cloudWordsArray) {
      var upperCap = 135;

      if (cloudWordsArray.length > upperCap) {
        while (cloudWordsArray.length > upperCap) {
          cloudWordsArray.shift();
          cloudWordsArray.pop();
        }
      }
      return(cloudWordsArray);
    }


    function generateWordsArray (wordsObj) {
      //This is where the words object gets converted into an array of objects to store styling information for each word.

      var arrayOfWords = [];
      var index = 0;
      var excludedWords = [ '', 'the', 'a', 'to', 'and', 'of', 'and', 'an', 'are', 'in', 'with', 'as', 'for', 'or', 'at', 'your', 'our', 'yours', 'is', 'if', 'this', 'be', 'that', 'has', 'you', 'we', 'by', "you'll", 'got', "you're", 'when', "that's", "you'll", 'but', 'than', "that's", 'youll', 'us', 'how', 'weve', "we've", 'what', 'why', 'will', "it's", 'where', 'those', "there's", 'its', 'youd', "you're", 'were', "you've", "there's", 'they', 'so', 'ok...as', 'like', 'etc', 'any', 'given', 'after', 'been', 'within', 'get', 'dont', 'brings', 'do', 'should', 'not', 'well', 'some', 'from', 'using', 'on', 'needing', 'very', '&', 'every', 'it', 'other', 'into', 'eg', 'more', 'all', 'throuh', 'above' , "we're", 'who', 'would', "aren't", 'their', 'these', 'come', 'bs', 'theyre', 'sex', '"get', 'andor', '•', '*', 'through', 'experience', 'please', '000', 'development', '￧', 'o', '⿢', '-', '&', '⿢', 'business', 'work', 'application' , '–', '00000', 'require', 'web' ];

      for (let key in wordsObj) {

        if (!excludedWords.includes(key)) {

          arrayOfWords[index] = (getWordObject(wordsObj[key], key));
          ++index;
        }

      }

      // arrayOfWords = scrambleArrayOrder(arrayOfWords);
      arrayOfWords = shiftBigWordsToCentre(arrayOfWords);
      arrayOfWords = tripLargeResults(arrayOfWords);
      console.log(arrayOfWords);
      return arrayOfWords;
    }

    function getWordHoverState (size) {
      if (size <= 12) {
        return('rotate(0deg)');
      }
      if (size <= 24){
        return('rotate(30deg)');
      }
      if (size <= 36) {
        return('rotate(60deg)');
      }
      if (size <= 48) {
        return('rotate(90deg)');
      }
      if (size <= 60) {
        return('rotate(120deg)');
      }
      return('rotate(150deg)');
    }
    var wordsArray = [];

    wordsArray = generateWordsArray(words);
    // console.log(wordsArray);
    return (wordsArray);
  }

  function wordCloudGen (wordObject) {

    function makeMouseExit (node, rotationQuantity, wordlyObject) {
      var newRotateValue = '';

      switch (rotationQuantity) {
        case ('rotate(0deg)'):
          newRotateValue = 'rotate(340deg)';
          break;
        case ('rotate(20deg)'):
          newRotateValue = 'rotate(320deg)';
          break;
        case ('rotate(40deg)'):
          newRotateValue = 'rotate(0deg)';
          break;
        case ('rotate(320deg)'):
          newRotateValue = 'rotate(20deg)';
          break;
        case ('rotate(340deg)'):
          newRotateValue = 'rotate(40deg)';
          break;
        default:
          newRotateValue = 'rotate(180deg)';
      }
      wordlyObject.rotation = newRotateValue;
      node.onmouseout = function () {
        this.style.transform = newRotateValue;

      };

    }

    function makeMouseOver (node, rotationQuantity, wordlyObject) {
      var newRotateValue = '';

      switch (rotationQuantity) {
        case ('rotate(0deg)'):
          newRotateValue = 'rotate(40deg)';
          break;
        case ('rotate(20deg)'):
          newRotateValue = 'rotate(3200deg)';
          break;
        case ('rotate(40deg)'):
          newRotateValue = 'rotate(340deg)';
          break;
        case ('rotate(320deg)'):
          newRotateValue = 'rotate(0deg)';
          break;
        case ('rotate(340deg)'):
          newRotateValue = 'rotate(20deg)';
          break;
        default:
          newRotateValue = 'rotate(40deg)';
      }
      wordlyObject.rotation = newRotateValue;
      node.onmouseover = function () {
        this.style.transform = newRotateValue;

      };
      makeMouseExit (node, newRotateValue, wordlyObject);

    }


    function clearCloudContainer (nodeForClear) {
      if (nodeForClear.hasChildNodes()) {
        while (nodeForClear.firstChild) {
          nodeForClear.removeChild(nodeForClear.firstChild);
        }
      }
    }

    function renderWordCloud (currentWords) {
      var container = document.getElementById("cloudContainer");
      clearCloudContainer(container);
      var newWord;
      var font = '"Roboto Slab", serif;';

      for (let i = 0; i < currentWords.length; i++) {
        newWord = document.createElement("div");
        container.appendChild(newWord);
        newWord.innerHTML = currentWords[i].text;
        newWord.setAttribute("style", "font-family: " + font + "; width: auto;" + "font-weight: " + currentWords[i].fontWeight + ";" + "color: " + currentWords[i].fontColor + ";" + "font-size: " + currentWords[i].fontSize + "px;" + "padding: " + currentWords[i].padding + ";" + "transform: " + currentWords[i].rotation + ";" + "display: inline-block;" + "-webkit-transition: 1s ease-in-out;" + "-moz-transition: 1s ease-in-out;" + "-o-transition: 1s ease-in-out;" + "transition: 1s ease-in-out;");
        makeMouseOver(newWord, currentWords[i].rotation, currentWords[i]);


      }

    }
    renderWordCloud(wordObject);
  }


  angular.module('app')
    .component('wordCloud', {
      controller: WordCloudController,
      templateUrl: '/js/wordCloud/wordCloud.template.html',
      bindings: {
        skills: "<",
        jobPosting: "<"
      }
    });

    function WordCloudController(){
      const vm = this;


      vm.$onInit = function() {

        console.log(vm.skills);
        console.log(vm.jobPosting);

        wordCloudGen(wordCLoudObjectGen(vm.skills.split(', '), vm.jobPosting));

      };

      vm.$onChanges = function(boundVarsObj) {

        wordCloudGen(wordCLoudObjectGen(boundVarsObj.skills.currentValue.split(', '), vm.jobPosting));
      };


    }
}());
