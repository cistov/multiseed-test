streamerClients {
    streamerClient(clientName = "TRADE_AUDIT_RESPONSE") {
        dataSource(processName = "{{upperCase appName}}_STREAMER", sourceName = "TRADE_AUDIT_STREAM")
        onMessage {
            send("{{upperCase appName}}_EVENT_HANDLER", "EVENT_TRADE_AUDIT_STREAM")
        }
    }
}