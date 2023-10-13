package global.genesis

import global.genesis.{{appName}}.message.event.PositionReport
import global.genesis.commons.model.GenesisSet
import global.genesis.dictionary.GenesisDictionary
import global.genesis.message.core.event.EventReply
import global.genesis.testsupport.AbstractGenesisTestSupport
import global.genesis.testsupport.GenesisTestConfig
import kotlinx.coroutines.runBlocking
import org.junit.Test

class {{paramCase appName}}PositionReportWriteTest : AbstractGenesisTestSupport<GenesisSet>(
    GenesisTestConfig {
        addPackageName("global.genesis.eventhandler.pal")
        genesisHome = "/GenesisHome/"
        parser = { it }
        scriptFileName = "{{appName}}-eventhandler.kts"
        initialDataFile = "data/TEST_DATA.csv"
        addAuthCacheOverride("ENTITY_VISIBILITY")
    }
) {
    override fun systemDefinition(): Map<String, Any> = mapOf(
        "IS_SCRIPT" to "true"
    )

    override fun createDictionary(): GenesisDictionary = prodDictionary()

    @Test
    fun `test write event`(): Unit = runBlocking {
        sendEvent(PositionReport()).assertedCast<EventReply.EventAck>()
    }
}