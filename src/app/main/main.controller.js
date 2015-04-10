'use strict';
/*jshint esnext: true */

class MainCtrl {
  constructor ($scope) {
    $scope.Strings = {
      'title':'CSS Animation Completeness'
    };
    $scope.status = "Ready";
    
    var completeness = {
      sheetName : 'index.css',
      getSheetByName(name){
        for (sheet in document.styleSheets) {
          if (sheet.href != null) {
            if (sheet.href.indexOf(name) != -1) {
              return sheet
            }
          }
        }
      },
      getRulesWithClassName(sheet, className){
        var rules = [];
        for (rule in sheet.cssRules) {
          if (rule.name == className) {
            rules.push(rule);
          }
        } 
        return rules;
      },
      stripPrefixedRules (rules) {
        var strippedRules = [];
        var prefixes = ['-webkit-','-ms-','-moz-','-o-'];
        for (rule in rules){
          var prefixed = false;
          for (prefix in prefixes){
            if (rule.cssText.indexOf(prefix) != -1){
              prefixed = true
              continue;
            }
          }
          if (prefixed == false) {
            strippedRules.push(rule);
          }
        }
        return strippedRules;
      },
      getPropertiesFromRule(rule) {
        var properties = [];
        for (rule in rule.cssRules){
          for (style in rule.style){
            if (properties.indexOf(style) == -1){
              properties.push(style);
            }
          }
        }
        return properties;
      },
      getRulesForAnimationByName(className){
        console.log( 'getRulesForAnimationByName: ' + className);
        var sheet = this.getSheetByName(this.sheetName);
        var rules = this.getRulesWithClassName(sheet, className);
        rules = this.stripPrefixedRules(rules);
        #  test the first
        #  test the first
        #  test the first
        # correctRules = true
        # 
        # for rule in rules
        #   if rule.name != className
        #     correctRules = false
        rule = rules[0];
        var properties = this.getPropertiesFromRule(rule);
        debugger;
      }
    }
    completeness.getRulesForAnimationByName('fade');
      
  }
}

MainCtrl.$inject = ['$scope'];

export default MainCtrl;
