/**
 * System              : Genesis Business Library
 * Sub-System          : multi-pro-code-test Configuration
 * Version             : 1.0
 * Copyright           : (c) Genesis
 * Date                : 2022-03-18
 * Function : Provide fields config for multi-pro-code-test.
 *
 * Modification History
 */

fields {

    field("TRADE_ID", type = STRING, maxSize = 100)
    field("QUANTITY", type = INT, nullable = SysDef.NULLABILITY_FOR_TRADE_FIELDS)
    field("PRICE", type = DOUBLE)
    field("SYMBOL", type = STRING, nullable = SysDef.NULLABILITY_FOR_TRADE_FIELDS, maxSize = 50)
    field("DIRECTION", type = ENUM("BUY", "SELL", default = "BUY"))

    field("COUNTERPARTY_ID", type = STRING)
    field("COUNTERPARTY_NAME", type = STRING)
    field("ENABLED", type = BOOLEAN)
    field("COUNTERPARTY_LEI", type = STRING)

    field("INSTRUMENT_ID", type = STRING)
    field("INSTRUMENT_NAME", type = STRING)
    field("MARKET_ID", type = STRING)
    field("COUNTRY_CODE", type = STRING)
    field("CURRENCY_ID", type = STRING)
    field("ASSET_CLASS", type = STRING)

    field("TRADE_DATE", type = DATE, nullable = SysDef.NULLABILITY_FOR_TRADE_FIELDS)
    field("ENTERED_BY", type = STRING, nullable = SysDef.NULLABILITY_FOR_TRADE_FIELDS, maxSize = 100)
    field(name = "TRADE_STATUS", type = ENUM("NEW", "ALLOCATED", "CANCELLED", default = "NEW"))

    field("POSITION_ID", type = STRING)
    field("NOTIONAL", type = DOUBLE)
    field("LAST_PRICE", type = DOUBLE)
    field("VALUE", type = DOUBLE)
    field("PNL", type = DOUBLE)

    field("FAVOURITE_TRADE_ID", type = STRING, maxSize = 100)
    field("FAVOURITE_TRADE_USER_NAME", type = STRING, maxSize = 100)

    field("BEEN_AUDITED", type = BOOLEAN)
}

