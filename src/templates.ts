angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("features/common/NavBar.html","<nav class=\"navbar navbar-default navbar-fixed-top\"><div class=container><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=#bs-example-navbar-collapse-1><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a id=main-title class=long-shadow href=#page-top></a></div><div class=\"collapse navbar-collapse\" id=bs-example-navbar-collapse-1><ul class=\"nav navbar-nav navbar-right\"><li ng-repeat=\"link in nav.links\"><a ui-sref={{link.ref}}>{{link.name}}</a></li></ul></div></div></nav>");
$templateCache.put("features/welcome/Welcome.html","<div class=\"opt-panel-header opt-secondary\"><div class=container><div class=row><div class=col-lg-12><div class=intro-text><span class=name>Beef App</span><hr class=star-light><span class=skills>Coming soon...</span> <span class=skills>Prepare to be disappointed!</span></div></div></div></div></div><section id=portfolio class=opt-primary><div class=container><div class=row><div class=\"col-lg-12 text-center\"><h2>Stack</h2><hr class=star-primary></div></div><div class=row><div class=\"col-sm-3 portfolio-item\"><a href=\"http://gulpjs.com/\" target=_blank class=portfolio-link><div class=caption><div class=caption-content><i class=\"fa fa-search-plus fa-3x\"></i></div></div><img src=images/gulp.png class=img-responsive alt></a></div><div class=\"col-sm-3 portfolio-item\"><a href=\"http://browserify.org/\" target=_blank class=portfolio-link><div class=caption><div class=caption-content><i class=\"fa fa-search-plus fa-3x\"></i></div></div><img src=images/browserify.png class=img-responsive alt></a></div><div class=\"col-sm-3 portfolio-item\"><a href=\"http://www.typescriptlang.org/\" target=_blank class=portfolio-link><div class=caption><div class=caption-content><i class=\"fa fa-search-plus fa-3x\"></i></div></div><img src=images/ts.png class=img-responsive alt></a></div><div class=\"col-sm-3 portfolio-item\"><a href=\"https://angularjs.org/\" target=_blank class=portfolio-link><div class=caption><div class=caption-content><i class=\"fa fa-search-plus fa-3x\"></i></div></div><img src=images/angular.png class=img-responsive alt></a></div></div></div></section><div class=\"opt-panel opt-secondary\"><div class=container><div class=row><div class=\"col-lg-12 text-center\"><h2>About</h2><hr class=star-light></div></div><div class=row><div class=\"col-lg-4 col-lg-offset-4\"><p>This boilerplate combines the use the typescript, angularjs and browserify in a node.js/gulp environment. This front page was built using the free bootstrap theme Freelancer.</p></div></div></div></div>");
$templateCache.put("features/players/PlayerDetails.html","<div class=\"opt-panel-header opt-secondary\"><div class=container><div class=\"tab tab1\"><p>{{pld.player.name}}</p><p>{{pld.player.age}}</p><p>{{pld.player.position}}</p></div></div></div>");
$templateCache.put("features/players/PlayersGrid.html","<div class=opt-primary><div class=container><div class=row><div class=\"col-lg-12 text-center\"><h2>Players</h2><hr class=star-primary></div></div><div class=row><table class=table><thead><tr><th>Name</th><th>Age</th><th>Position</th><th></th><th></th><th><a href=# ng-click=pl.create()>Add</a></th></tr></thead><tbody><tr ng-repeat=\"p in pl.players\"><td style=\"cursor: pointer;\"><a ui-sref=\"Player({ player: p })\">{{ p.name }}</a></td><td>{{p.age}}</td><td>{{p.position}}</td><td><button class=btn type=button ng-click=pl.edit(p)>Edit</button></td><td><button class=btn type=button ng-click=pl.delete(p)>Delete</button></td></tr></tbody></table><hr><div class=footer></div></div></div></div>");
$templateCache.put("features/styleTest/StyleTest.html","<div class=\"container enjoy-backbround\"><h2>Style Test</h2><div class=col-md-12><label for=inputName>Name</label></div><div class=col-md-12><input id=inputName class=enjoy-css placeholder=Username type=text></div><div class=col-md-12><label for=inputPassword>Password</label></div><div class=col-md-12><input id=inputPassword class=enjoy-css placeholder=Password type=password></div><hr></div>");
$templateCache.put("features/players/modalDialog/PlayerCreate.html","<div class=modal-header><h3>Create</h3></div><div class=modal-body><label>Name: <input type=text ng-model=md.player.name></label><br><label>Age: <input type=number ng-model=md.player.age></label><br><label>Position: <input type=text ng-model=md.player.position></label><br></div><div class=modal-footer><button type=button class=btn data-ng-click=md.cancel()>Cancel</button> <button class=\"btn btn-primary\" data-ng-click=md.proceed()>Create</button></div>");
$templateCache.put("features/players/modalDialog/PlayerDelete.html","<div class=modal-header><h3>Delete player</h3></div><div class=modal-body><p>Are you sure you want to delete {{md.player.name}}?</p></div><div class=modal-footer><button type=button class=btn data-ng-click=md.cancel()>Cancel</button> <button class=\"btn btn-primary\" data-ng-click=md.proceed()>Delete</button></div>");
$templateCache.put("features/players/modalDialog/PlayerEdit.html","<div class=modal-header><h3>Edit</h3></div><div class=modal-body><label>Name: <input type=text ng-model=md.player.name></label><br><label>Age: <input type=number ng-model=md.player.age></label><br><label>Position: <input type=text ng-model=md.player.position></label><br></div><div class=modal-footer><button type=button class=btn data-ng-click=md.cancel()>Cancel</button> <button class=\"btn btn-primary\" data-ng-click=md.proceed()>Edit</button></div>");}]);