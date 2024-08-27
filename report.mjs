// sebenarnya ini lebih ke fitur di banding libs

// usage =>

// node --report-uncaught-exception --report-on-signal \
// --report-on-fatalerror app.js

//          ||
import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
// bikin file report-nya
process.report.filename = "report.json";

const sampleError = () => {
    throw new Error("Ups");
}

sampleError();