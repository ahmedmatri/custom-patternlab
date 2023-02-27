var config = {"cacheBust":true,"cleanPublic":true,"defaultPattern":"all","defaultShowPatternInfo":false,"ishControlsHide":{"s":false,"m":false,"l":false,"full":false,"random":false,"disco":false,"hay":true,"mqs":false,"find":false,"views-all":false,"views-annotations":false,"views-code":false,"views-new":false,"tools-all":false,"tools-docs":false},"ishViewportRange":{"s":[240,500],"m":[500,800],"l":[800,2600]},"logLevel":"info","outputFileSuffixes":{"rendered":".rendered","rawTemplate":"","markupOnly":".markup-only"},"paths":{"source":{"root":"./patternlab/","patterns":"./components/","data":"./patternlab/_data/","meta":"./patternlab/_meta/","annotations":"./patternlab/_annotations/","styleguide":"dist/","patternlabFiles":{"general-header":"views/partials/general-header.mustache","general-footer":"views/partials/general-footer.mustache","patternSection":"views/partials/patternSection.mustache","patternSectionSubgroup":"views/partials/patternSectionSubgroup.mustache","viewall":"views/viewall.mustache"},"js":"./dist/components","images":"./images","fonts":"./fonts","css":"./dist/components","maps":"./dist/maps"},"public":{"root":"dist/public/","patterns":"dist/public/patterns/","data":"dist/public/styleguide/data/","annotations":"dist/public/annotations/","styleguide":"dist/public/styleguide/","js":"dist/public/components","images":"dist/public/images","fonts":"dist/public/fonts","css":"dist/public/components","maps":"dist/public/maps"}},"patternExtension":"twig","patternStateCascade":["inprogress","inreview","complete"],"patternExportAll":false,"patternExportDirectory":"pattern_exports","patternExportPatternPartials":[],"patternExportPreserveDirectoryStructure":true,"patternExportRaw":false,"patternMergeVariantArrays":true,"renderFlatPatternsOnViewAllPages":false,"serverOptions":{"wait":1000},"starterkitSubDir":"dist","styleGuideExcludes":[],"theme":{"color":"dark","density":"compact","layout":"horizontal","noViewAll":false,"logo":{"text":"Web Kit","altText":"HBKU Lab Logo","url":"./","srcLight":"../../images/logo.svg","srcDark":"../../images/logo.svg","width":"40","height":"40"}},"uikits":[{"name":"uikit-workshop","package":"@pattern-lab/uikit-workshop","outputDir":"","enabled":true,"excludedPatternStates":[],"excludedTags":[]}],"engines":{"handlebars":{"package":"@pattern-lab/engine-handlebars","fileExtensions":["handlebars","hbs"],"extend":"helpers/*.js"},"twig-php":{"package":"@pattern-lab/engine-twig-php","fileExtensions":["twig"],"namespaces":[{"id":"config","recursive":true,"paths":["components/config"]},{"id":"base","recursive":true,"paths":["components/base"]},{"id":"atoms","recursive":true,"paths":["components/atoms"]},{"id":"molecules","recursive":true,"paths":["components/molecules"]},{"id":"organisms","recursive":true,"paths":["components/organisms"]},{"id":"templates","recursive":true,"paths":["components/templates"]},{"id":"pages","recursive":true,"paths":["components/pages"]},{"id":"macros","recursive":true,"paths":["patternlab/_macros"]}],"alterTwigEnv":[{"file":"patternlab/_twig-components/filters/clean_class.filter.php","functions":["add_clean_class_filter"]},{"file":"patternlab/_twig-components/filters/clean_id.filter.php","functions":["add_clean_id_filter"]},{"file":"patternlab/_twig-components/filters/format_date.filter.php","functions":["add_format_date_filter"]},{"file":"patternlab/_twig-components/filters/placeholder.filter.php","functions":["add_placeholder_filter"]},{"file":"patternlab/_twig-components/filters/render.filter.php","functions":["add_render_filter"]},{"file":"patternlab/_twig-components/filters/safe_join.filter.php","functions":["add_safe_join_filter"]},{"file":"patternlab/_twig-components/filters/t.filter.php","functions":["add_t_filter"]},{"file":"patternlab/_twig-components/filters/without.filter.php","functions":["add_without_filter"]},{"file":"patternlab/_twig-components/filters/keysort.filter.php","functions":["add_key_sort_filter"]},{"file":"patternlab/_twig-components/filters/unique_id.filter.patternlab.php","functions":["add_unique_id_filter"]},{"file":"patternlab/_twig-components/functions/add_attributes.function.patternlab.php","functions":["add_add_attributes_function"]},{"file":"patternlab/_twig-components/functions/attach_library.function.php","functions":["add_attach_library_function"]},{"file":"patternlab/_twig-components/functions/link.function.php","functions":["add_link_function"]},{"file":"patternlab/_twig-components/functions/path.function.php","functions":["add_path_function"]},{"file":"patternlab/_twig-components/functions/url.function.php","functions":["add_url_function"]},{"file":"patternlab/_twig-components/functions/create_attribute.function.php","functions":["add_create_attribute_function"]},{"file":"patternlab/_twig-components/functions/asset.function.php","functions":["add_asset_function"]}]},"mustache":{"package":"@pattern-lab/engine-mustache","extensions":"mustache"}}};
var ishControls = {"ishControlsHide":{"s":false,"m":false,"l":false,"full":false,"random":false,"disco":false,"hay":true,"mqs":false,"find":false,"views-all":false,"views-annotations":false,"views-code":false,"views-new":false,"tools-all":false,"tools-docs":false}};
var navItems = {"patternGroups": [{"patternGroupLC":"atoms","patternGroupUC":"Atoms","patternGroup":"atoms","patternGroupDash":"atoms","patternGroupItems":[{"patternSubgroupLC":"button","patternSubgroupUC":"Button","patternSubgroup":"button","patternSubgroupDash":"button","patternSubgroupItems":[{"patternPartial":"atoms-button","patternName":"Button","patternState":"","patternPath":"atoms-button-button/atoms-button-button.rendered.html","name":"atoms-button-button","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"viewall-atoms-button","patternName":"View All","patternPath":"atoms-button/index.html","patternGroup":"atoms","patternSubgroup":"button","name":"atoms-button","isDocPattern":true,"order":9007199254740991}],"order":0}],"order":0,"patternItems":[{"patternPartial":"viewall-atoms-all","patternName":"View all Atoms","patternPath":"atoms/index.html","name":"atoms","isDocPattern":true,"order":9007199254740991}]},{"patternGroupLC":"base","patternGroupUC":"Base","patternGroup":"base","patternGroupDash":"base","patternGroupItems":[],"order":0,"patternItems":[{"patternPartial":"base-Entity","patternName":"Entity","patternState":"","patternPath":"base-Entity/base-Entity.rendered.html","name":"base-Entity","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"base-Event","patternName":"Event","patternState":"","patternPath":"base-Event/base-Event.rendered.html","name":"base-Event","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"base-Glance","patternName":"Glance","patternState":"","patternPath":"base-Glance/base-Glance.rendered.html","name":"base-Glance","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"base-News","patternName":"News","patternState":"","patternPath":"base-News/base-News.rendered.html","name":"base-News","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"base-colors","patternName":"Colors","patternState":"","patternPath":"base-colors/base-colors.rendered.html","name":"base-colors","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"base-fonts","patternName":"Fonts","patternState":"","patternPath":"base-fonts/base-fonts.rendered.html","name":"base-fonts","isDocPattern":false,"order":1,"variantOrder":0}]},{"patternGroupLC":"pages","patternGroupUC":"Pages","patternGroup":"pages","patternGroupDash":"pages","patternGroupItems":[],"order":6,"patternItems":[{"patternPartial":"pages-Home","patternName":"Home","patternState":"","patternPath":"pages-Home/pages-Home.rendered.html","name":"pages-Home","isDocPattern":false,"order":0,"variantOrder":0}]}], "ishControlsHide": {"s":false,"m":false,"l":false,"full":false,"random":false,"disco":false,"hay":true,"mqs":false,"find":false,"views-all":false,"views-annotations":false,"views-code":false,"views-new":false,"tools-all":false,"tools-docs":false}};
var patternPaths = {"atoms":{"button":"atoms-button-button"},"base":{"colors":"base-colors","Entity":"base-Entity","Event":"base-Event","fonts":"base-fonts","Glance":"base-Glance","News":"base-News"},"pages":{"Home":"pages-Home"}};
var viewAllPaths = {"atoms":{"button":"atoms-button","all":"atoms"},"base":{"all":"base"},"pages":{"all":"pages"}};
var plugins = [];
var defaultShowPatternInfo = false;
var defaultPattern = "all";
