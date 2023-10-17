dependencies {
    implementation("global.genesis:genesis-pal-execution")
    implementation("com.opencsv:opencsv:5.6")
    implementation("com.google.code.gson:gson:2.9.1")
    api("global.genesis:genesis-router")
    api("global.genesis:genesis-process")
    api("global.genesis:genesis-db")
    api(project(":{{appName}}-eventhandler"))
    compileOnly(project(":{{appName}}-config"))
    compileOnly(project(path = ":{{appName}}-dictionary-cache", configuration = "codeGen"))
    testCompileOnly(project(":{{appName}}-config"))
    testImplementation(project(":{{appName}}-config"))
    testImplementation("global.genesis:genesis-dbtest")
    testImplementation("global.genesis:genesis-testsupport")
    testImplementation(project(path = ":{{appName}}-dictionary-cache", configuration = "codeGen"))
}

description = "{{appName}}-file-handler"
