import winston from "winston";
import config from "config";

const levels = {
  error: 0,
  warning: 1,
  info: 2,
  http: 3,
  debugger: 4,
};

const level = () => {
  const env = config.get<string>("env") || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warning";
};

const colors = {
  error: "red",
  warning: "yellow",
  info: "green",
  http: "magenta",
  debugger: "white",
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: "yyyy-MM-dd HH:mm:ss" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} - ${info.level}: ${info.message}`
  )
);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: "logs/error.log",
    level: "error",
  }),
  new winston.transports.File({
    filename: "logs/info.log",
  }),
];

const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

export default Logger;
