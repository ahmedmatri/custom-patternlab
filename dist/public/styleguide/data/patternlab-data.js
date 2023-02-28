var config = {"cacheBust":true,"cleanPublic":true,"defaultPattern":"all","defaultShowPatternInfo":false,"ishControlsHide":{"s":false,"m":false,"l":false,"full":false,"random":false,"disco":false,"hay":true,"mqs":false,"find":false,"views-all":false,"views-annotations":false,"views-code":false,"views-new":false,"tools-all":false,"tools-docs":false},"ishViewportRange":{"s":[240,500],"m":[500,800],"l":[800,2600]},"logLevel":"info","outputFileSuffixes":{"rendered":".rendered","rawTemplate":"","markupOnly":".markup-only"},"paths":{"source":{"root":"./patternlab/","patterns":"./components/","data":"./patternlab/_data/","meta":"./patternlab/_meta/","annotations":"./patternlab/_annotations/","styleguide":"dist/","patternlabFiles":{"general-header":"views/partials/general-header.mustache","general-footer":"views/partials/general-footer.mustache","patternSection":"views/partials/patternSection.mustache","patternSectionSubgroup":"views/partials/patternSectionSubgroup.mustache","viewall":"views/viewall.mustache"},"js":"./dist/components","images":"./images","fonts":"./fonts","css":"./dist/components","maps":"./dist/maps"},"public":{"root":"dist/public/","patterns":"dist/public/patterns/","data":"dist/public/styleguide/data/","annotations":"dist/public/annotations/","styleguide":"dist/public/styleguide/","js":"dist/public/components","images":"dist/public/images","fonts":"dist/public/fonts","css":"dist/public/components","maps":"dist/public/maps"}},"patternExtension":"twig","patternStateCascade":["inprogress","inreview","complete"],"patternExportAll":false,"patternExportDirectory":"pattern_exports","patternExportPatternPartials":[],"patternExportPreserveDirectoryStructure":true,"patternExportRaw":false,"patternMergeVariantArrays":true,"renderFlatPatternsOnViewAllPages":false,"serverOptions":{"wait":1000},"starterkitSubDir":"dist","styleGuideExcludes":[],"theme":{"color":"dark","density":"compact","layout":"horizontal","noViewAll":false,"logo":{"text":"Web Kit","altText":"HBKU Lab Logo","url":"./","srcLight":"../../images/logo.svg","srcDark":"../../images/logo.svg","width":"40","height":"40"}},"uikits":[{"name":"uikit-workshop","package":"@pattern-lab/uikit-workshop","outputDir":"","enabled":true,"excludedPatternStates":[],"excludedTags":[]}],"engines":{"handlebars":{"package":"@pattern-lab/engine-handlebars","fileExtensions":["handlebars","hbs"],"extend":"helpers/*.js"},"twig-php":{"package":"@pattern-lab/engine-twig-php","fileExtensions":["twig"],"namespaces":[{"id":"config","recursive":true,"paths":["components/config"]},{"id":"base","recursive":true,"paths":["components/base"]},{"id":"atoms","recursive":true,"paths":["components/atoms"]},{"id":"molecules","recursive":true,"paths":["components/molecules"]},{"id":"organisms","recursive":true,"paths":["components/organisms"]},{"id":"templates","recursive":true,"paths":["components/templates"]},{"id":"pages","recursive":true,"paths":["components/pages"]},{"id":"macros","recursive":true,"paths":["patternlab/_macros"]}],"alterTwigEnv":[{"file":"patternlab/_twig-components/filters/clean_class.filter.php","functions":["add_clean_class_filter"]},{"file":"patternlab/_twig-components/filters/clean_id.filter.php","functions":["add_clean_id_filter"]},{"file":"patternlab/_twig-components/filters/format_date.filter.php","functions":["add_format_date_filter"]},{"file":"patternlab/_twig-components/filters/placeholder.filter.php","functions":["add_placeholder_filter"]},{"file":"patternlab/_twig-components/filters/render.filter.php","functions":["add_render_filter"]},{"file":"patternlab/_twig-components/filters/safe_join.filter.php","functions":["add_safe_join_filter"]},{"file":"patternlab/_twig-components/filters/t.filter.php","functions":["add_t_filter"]},{"file":"patternlab/_twig-components/filters/without.filter.php","functions":["add_without_filter"]},{"file":"patternlab/_twig-components/filters/keysort.filter.php","functions":["add_key_sort_filter"]},{"file":"patternlab/_twig-components/filters/unique_id.filter.patternlab.php","functions":["add_unique_id_filter"]},{"file":"patternlab/_twig-components/functions/add_attributes.function.patternlab.php","functions":["add_add_attributes_function"]},{"file":"patternlab/_twig-components/functions/attach_library.function.php","functions":["add_attach_library_function"]},{"file":"patternlab/_twig-components/functions/link.function.php","functions":["add_link_function"]},{"file":"patternlab/_twig-components/functions/path.function.php","functions":["add_path_function"]},{"file":"patternlab/_twig-components/functions/url.function.php","functions":["add_url_function"]},{"file":"patternlab/_twig-components/functions/create_attribute.function.php","functions":["add_create_attribute_function"]},{"file":"patternlab/_twig-components/functions/asset.function.php","functions":["add_asset_function"]}]},"mustache":{"package":"@pattern-lab/engine-mustache","extensions":"mustache"}}};
var ishControls = {"ishControlsHide":{"s":false,"m":false,"l":false,"full":false,"random":false,"disco":false,"hay":true,"mqs":false,"find":false,"views-all":false,"views-annotations":false,"views-code":false,"views-new":false,"tools-all":false,"tools-docs":false}};
var navItems = {"patternGroups": [{"patternGroupLC":"atoms","patternGroupUC":"Atoms","patternGroup":"atoms","patternGroupDash":"atoms","patternGroupItems":[{"patternSubgroupLC":"button","patternSubgroupUC":"Button","patternSubgroup":"button","patternSubgroupDash":"button","patternSubgroupItems":[{"patternPartial":"atoms-button","patternName":"Button","patternState":"","patternPath":"atoms-button-button/atoms-button-button.rendered.html","name":"atoms-button-button","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"viewall-atoms-button","patternName":"View All","patternPath":"atoms-button/index.html","patternGroup":"atoms","patternSubgroup":"button","name":"atoms-button","isDocPattern":true,"order":9007199254740991}],"order":0},{"patternSubgroupLC":"dates","patternSubgroupUC":"Dates","patternSubgroup":"dates","patternSubgroupDash":"dates","patternSubgroupItems":[{"patternPartial":"atoms-dates","patternName":"Dates","patternState":"","patternPath":"atoms-dates-dates/atoms-dates-dates.rendered.html","name":"atoms-dates-dates","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"viewall-atoms-dates","patternName":"View All","patternPath":"atoms-dates/index.html","patternGroup":"atoms","patternSubgroup":"dates","name":"atoms-dates","isDocPattern":true,"order":9007199254740991}],"order":0},{"patternSubgroupLC":"images","patternSubgroupUC":"Images","patternSubgroup":"images","patternSubgroupDash":"images","patternSubgroupItems":[{"patternPartial":"atoms-img","patternName":"Img","patternState":"","patternPath":"atoms-images-img/atoms-images-img.rendered.html","name":"atoms-images-img","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"viewall-atoms-images","patternName":"View All","patternPath":"atoms-images/index.html","patternGroup":"atoms","patternSubgroup":"images","name":"atoms-images","isDocPattern":true,"order":9007199254740991}],"order":0}],"order":0,"patternItems":[{"patternPartial":"viewall-atoms-all","patternName":"View all Atoms","patternPath":"atoms/index.html","name":"atoms","isDocPattern":true,"order":9007199254740991}]},{"patternGroupLC":"base","patternGroupUC":"Base","patternGroup":"base","patternGroupDash":"base","patternGroupItems":[{"patternSubgroupLC":"colors","patternSubgroupUC":"Colors","patternSubgroup":"colors","patternSubgroupDash":"colors","patternSubgroupItems":[{"patternPartial":"base-colors","patternName":"Colors","patternState":"","patternPath":"base-colors-colors/base-colors-colors.rendered.html","name":"base-colors-colors","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"viewall-base-colors","patternName":"View All","patternPath":"base-colors/index.html","patternGroup":"base","patternSubgroup":"colors","name":"base-colors","isDocPattern":true,"order":9007199254740991}],"order":0},{"patternSubgroupLC":"fonts","patternSubgroupUC":"Fonts","patternSubgroup":"fonts","patternSubgroupDash":"fonts","patternSubgroupItems":[{"patternPartial":"base-fonts","patternName":"Fonts","patternState":"","patternPath":"base-fonts-fonts/base-fonts-fonts.rendered.html","name":"base-fonts-fonts","isDocPattern":false,"order":1,"variantOrder":0},{"patternPartial":"viewall-base-fonts","patternName":"View All","patternPath":"base-fonts/index.html","patternGroup":"base","patternSubgroup":"fonts","name":"base-fonts","isDocPattern":true,"order":9007199254740991}],"order":0}],"order":0,"patternItems":[{"patternPartial":"viewall-base-all","patternName":"View all Base","patternPath":"base/index.html","name":"base","isDocPattern":true,"order":9007199254740991}]},{"patternGroupLC":"molecules","patternGroupUC":"Molecules","patternGroup":"molecules","patternGroupDash":"molecules","patternGroupItems":[{"patternSubgroupLC":"cards","patternSubgroupUC":"Cards","patternSubgroup":"cards","patternSubgroupDash":"cards","patternSubgroupItems":[{"patternPartial":"molecules-event","patternName":"Event","patternState":"","patternPath":"molecules-cards-event/molecules-cards-event.rendered.html","name":"molecules-cards-event","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"molecules-focusareas","patternName":"Focusareas","patternState":"","patternPath":"molecules-cards-focusareas/molecules-cards-focusareas.rendered.html","name":"molecules-cards-focusareas","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"molecules-news","patternName":"News","patternState":"","patternPath":"molecules-cards-news/molecules-cards-news.rendered.html","name":"molecules-cards-news","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"viewall-molecules-cards","patternName":"View All","patternPath":"molecules-cards/index.html","patternGroup":"molecules","patternSubgroup":"cards","name":"molecules-cards","isDocPattern":true,"order":9007199254740991}],"order":0},{"patternSubgroupLC":"items","patternSubgroupUC":"Items","patternSubgroup":"items","patternSubgroupDash":"items","patternSubgroupItems":[{"patternPartial":"molecules-glance","patternName":"Glance","patternState":"","patternPath":"molecules-items-glance/molecules-items-glance.rendered.html","name":"molecules-items-glance","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"viewall-molecules-items","patternName":"View All","patternPath":"molecules-items/index.html","patternGroup":"molecules","patternSubgroup":"items","name":"molecules-items","isDocPattern":true,"order":9007199254740991}],"order":0}],"order":3,"patternItems":[{"patternPartial":"viewall-molecules-all","patternName":"View all Molecules","patternPath":"molecules/index.html","name":"molecules","isDocPattern":true,"order":9007199254740991}]},{"patternGroupLC":"organisms","patternGroupUC":"Organisms","patternGroup":"organisms","patternGroupDash":"organisms","patternGroupItems":[{"patternSubgroupLC":"block","patternSubgroupUC":"Block","patternSubgroup":"Block","patternSubgroupDash":"Block","patternSubgroupItems":[{"patternPartial":"organisms-Entity","patternName":"Entity","patternState":"","patternPath":"organisms-Block-Entity/organisms-Block-Entity.rendered.html","name":"organisms-Block-Entity","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"organisms-Events","patternName":"Events","patternState":"","patternPath":"organisms-Block-Events/organisms-Block-Events.rendered.html","name":"organisms-Block-Events","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"organisms-FocusAreas","patternName":"Focus Areas","patternState":"","patternPath":"organisms-Block-FocusAreas/organisms-Block-FocusAreas.rendered.html","name":"organisms-Block-FocusAreas","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"organisms-Glance","patternName":"Glance","patternState":"","patternPath":"organisms-Block-Glance/organisms-Block-Glance.rendered.html","name":"organisms-Block-Glance","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"organisms-News","patternName":"News","patternState":"","patternPath":"organisms-Block-News/organisms-Block-News.rendered.html","name":"organisms-Block-News","isDocPattern":false,"order":0,"variantOrder":0},{"patternPartial":"viewall-organisms-Block","patternName":"View All","patternPath":"organisms-Block/index.html","patternGroup":"organisms","patternSubgroup":"Block","name":"organisms-Block","isDocPattern":true,"order":9007199254740991}],"order":0}],"order":4,"patternItems":[{"patternPartial":"viewall-organisms-all","patternName":"View all Organisms","patternPath":"organisms/index.html","name":"organisms","isDocPattern":true,"order":9007199254740991}]},{"patternGroupLC":"pages","patternGroupUC":"Pages","patternGroup":"pages","patternGroupDash":"pages","patternGroupItems":[],"order":6,"patternItems":[{"patternPartial":"pages-Home","patternName":"Home","patternState":"","patternPath":"pages-Home/pages-Home.rendered.html","name":"pages-Home","isDocPattern":false,"order":0,"variantOrder":0}]}], "ishControlsHide": {"s":false,"m":false,"l":false,"full":false,"random":false,"disco":false,"hay":true,"mqs":false,"find":false,"views-all":false,"views-annotations":false,"views-code":false,"views-new":false,"tools-all":false,"tools-docs":false}};
var patternPaths = {"atoms":{"button":"atoms-button-button","dates":"atoms-dates-dates","img":"atoms-images-img"},"base":{"colors":"base-colors-colors","fonts":"base-fonts-fonts"},"molecules":{"event":"molecules-cards-event","focusareas":"molecules-cards-focusareas","news":"molecules-cards-news","glance":"molecules-items-glance"},"organisms":{"Entity":"organisms-Block-Entity","Events":"organisms-Block-Events","FocusAreas":"organisms-Block-FocusAreas","Glance":"organisms-Block-Glance","News":"organisms-Block-News"},"pages":{"Home":"pages-Home"}};
var viewAllPaths = {"atoms":{"button":"atoms-button","all":"atoms","dates":"atoms-dates","images":"atoms-images"},"base":{"colors":"base-colors","all":"base","fonts":"base-fonts"},"molecules":{"cards":"molecules-cards","all":"molecules","items":"molecules-items"},"organisms":{"Block":"organisms-Block","all":"organisms"},"pages":{"all":"pages"}};
var plugins = [];
var defaultShowPatternInfo = false;
var defaultPattern = "all";
