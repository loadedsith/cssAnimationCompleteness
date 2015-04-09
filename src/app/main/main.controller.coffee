angular.module "cssAnimationCompleteness"
  .controller "MainCtrl", ($scope) ->
    $scope.Strings = {
      'title':'CSS Animation Completeness'
    }
    $scope.status = "Ready"
    
    
    completeness = {
      sheetName : 'index.css',
      getSheetByName : (name) -> 
        for sheet in document.styleSheets 
          if sheet.href != null
            if sheet.href.indexOf(name) != -1
              return sheet
              
      getRulesWithClassName: (sheet, className)->
        rules = []
        for rule in sheet.cssRules
          if rule.name == className
            rules.push rule
        rules
      
      stripPrefixedRules: (rules) ->
        strippedRules = []
        prefixes = ['-webkit-','-ms-','-moz-','-o-']
        for rule in rules
          prefixed = false
          for prefix in prefixes
            if rule.cssText.indexOf(prefix) != -1
              prefixed = true
          if prefixed == false
            strippedRules.push rule
        strippedRules
        
      getRulesForAnimationByName: (className)->
        console.log 'getRulesForAnimationByName: ' + className
        sheet = this.getSheetByName(this.sheetName)
        rules = this.getRulesWithClassName(sheet, className)

        rules = this.stripPrefixedRules(rules)

        debugger
        

        true
    }
    completeness.getRulesForAnimationByName('fade')