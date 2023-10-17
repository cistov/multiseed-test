package global.genesis.{{appName}}.message.event

import global.genesis.message.core.Outbound

sealed class CustomInstrumentEventReply : Outbound() {
    class InstrumentEventValidateAck : CustomInstrumentEventReply()
    data class InstrumentEventAck(val instrumentId: String) : CustomInstrumentEventReply()
    data class InstrumentEventNack(val error: String) : CustomInstrumentEventReply()
}