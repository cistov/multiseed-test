plugins {
    id("global.genesis.deploy")
}

description = "{{appName}}-deploy"

dependencies {
    api(project(":{{appName}}-eventhandler"))
    api(project(":{{appName}}-messages"))

    /* dependencies required for building the docker image from the Gradle task */
    genesisServer(
        group = "global.genesis",
        name = "genesis-distribution",
        version = properties["genesisVersion"].toString(),
        classifier = "bin",
        ext = "zip"
    )
    genesisServer(
        group = "global.genesis",
        name = "auth-distribution",
        version = properties["authVersion"].toString(),
        classifier = "bin",
        ext = "zip"
    )
    genesisServer(project(":{{appName}}-distribution", "distribution"))
    genesisServer(project(":{{appName}}-site-specific", "distribution"))
    genesisWeb("client:web")
    /* --- */

    /* Add additional dependencies on other external distributions here */
}
tasks {
    copyDependencies {
        from(configurations.getByName("genesisServer"))
    }
}