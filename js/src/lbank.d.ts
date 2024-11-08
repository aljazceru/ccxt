import Exchange from './abstract/lbank.js';
import type { Balances, Currency, Dict, Int, Market, Num, OHLCV, Order, OrderBook, OrderSide, OrderType, Str, Strings, Ticker, Tickers, Trade, TradingFeeInterface, TradingFees, Transaction, int, DepositAddress, FundingRates, FundingRate } from './base/types.js';
/**
 * @class lbank
 * @augments Exchange
 */
export default class lbank extends Exchange {
    describe(): any;
    fetchTime(params?: {}): Promise<number>;
    fetchMarkets(params?: {}): Promise<Market[]>;
    fetchSpotMarkets(params?: {}): Promise<any[]>;
    fetchSwapMarkets(params?: {}): Promise<any[]>;
    parseTicker(ticker: Dict, market?: Market): Ticker;
    fetchTicker(symbol: string, params?: {}): Promise<Ticker>;
    fetchTickers(symbols?: Strings, params?: {}): Promise<Tickers>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    parseTrade(trade: Dict, market?: Market): Trade;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    parseOHLCV(ohlcv: any, market?: Market): OHLCV;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    parseBalance(response: any): Balances;
    parseFundingRate(ticker: any, market?: Market): FundingRate;
    fetchFundingRate(symbol: string, params?: {}): Promise<FundingRate>;
    fetchFundingRates(symbols?: Strings, params?: {}): Promise<FundingRates>;
    fetchBalance(params?: {}): Promise<Balances>;
    parseTradingFee(fee: Dict, market?: Market): TradingFeeInterface;
    fetchTradingFee(symbol: string, params?: {}): Promise<TradingFeeInterface>;
    fetchTradingFees(params?: {}): Promise<TradingFees>;
    createMarketBuyOrderWithCost(symbol: string, cost: number, params?: {}): Promise<Order>;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: number, price?: Num, params?: {}): Promise<Order>;
    parseOrderStatus(status: Str): string;
    parseOrder(order: Dict, market?: Market): Order;
    fetchOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    fetchOrderSupplement(id: string, symbol?: Str, params?: {}): Promise<Order>;
    fetchOrderDefault(id: string, symbol?: Str, params?: {}): Promise<Order>;
    fetchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOpenOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    cancelOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    cancelAllOrders(symbol?: Str, params?: {}): Promise<Order[]>;
    getNetworkCodeForCurrency(currencyCode: any, params: any): string;
    fetchDepositAddress(code: string, params?: {}): Promise<DepositAddress>;
    fetchDepositAddressDefault(code: string, params?: {}): Promise<DepositAddress>;
    fetchDepositAddressSupplement(code: string, params?: {}): Promise<DepositAddress>;
    withdraw(code: string, amount: number, address: string, tag?: any, params?: {}): Promise<Transaction>;
    parseTransactionStatus(status: any, type: any): string;
    parseTransaction(transaction: Dict, currency?: Currency): Transaction;
    fetchDeposits(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchWithdrawals(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchTransactionFees(codes?: Strings, params?: {}): Promise<any>;
    fetchPrivateTransactionFees(params?: {}): Promise<{
        withdraw: Dict;
        deposit: {};
        info: any;
    }>;
    fetchPublicTransactionFees(params?: {}): Promise<{
        withdraw: Dict;
        deposit: {};
        info: any;
    }>;
    fetchDepositWithdrawFees(codes?: Strings, params?: {}): Promise<any>;
    fetchPrivateDepositWithdrawFees(codes?: any, params?: {}): Promise<any>;
    fetchPublicDepositWithdrawFees(codes?: any, params?: {}): Promise<Dict>;
    parsePublicDepositWithdrawFees(response: any, codes?: any): Dict;
    parseDepositWithdrawFee(fee: any, currency?: Currency): any;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    convertSecretToPem(secret: any): string;
    handleErrors(httpCode: int, reason: string, url: string, method: string, headers: Dict, body: string, response: any, requestHeaders: any, requestBody: any): any;
}
