declare class QSignal<T extends (...any) => void> {
  connect(method: T): any;
  connect(receiver: any, method: T): any;
  disconnect(receiver: any, method: T): any;
}

interface Slot {
  (): void;
}

/**
 * Toon Boom's documentation uses these C++ types, and I have preserved their usage in the type definitions.
 */
declare type bool = boolean;
declare type uint = int;
declare type int = number;
declare type double = number;
declare type ushort = number;
declare type short = number;
declare type qlonglong = number;
declare type qulonglong = number;
declare type ulong = number;
declare type long = number;
declare type qint64 = number;
declare type qreal = number;
declare type float = number;
declare type char = string;
declare type uchar = string;

/**
 * Simplify some generic types
 */
declare type StringList = string[];
declare type QSet<T> = any;
declare type QVector<T> = any;

declare namespace std {
  type wstring = string;
  type list<T> = T[];
  type map<Key, T> = any;
}
