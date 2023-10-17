dependencies {
    implementation("global.genesis:genesis-pal-execution")
    implementation("global.genesis:genesis-pal-camel")
    implementation("global.genesis:genesis-eventhandler")
    implementation(project(":{{appName}}-messages"))
    api("org.apache.camel:camel-stream:3.19.0")
    api("org.apache.camel:camel-http:3.19.0")
    api("org.apache.camel:camel-management:3.19.0")
    api("org.apache.camel:camel-console:3.19.0")
    api("org.apache.camel:camel-cli-connector:3.19.0")
    api("org.apache.camel:camel-timer:3.19.0")
    api("org.apache.camel:camel-ftp:3.19.0")
    api("org.apache.camel:camel-jsch:3.19.0")
    api("com.jcraft:jsch:0.1.55")
    compileOnly(project(":{{appName}}-config"))
    compileOnly(project(path = ":{{appName}}-dictionary-cache", configuration = "codeGen"))
    testImplementation("global.genesis:genesis-dbtest")
    testImplementation("global.genesis:genesis-testsupport")
    testImplementation(project(path = ":{{appName}}-dictionary-cache", configuration = "codeGen"))
}

description = "{{appName}}-camel-libs"
