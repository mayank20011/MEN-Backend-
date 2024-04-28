import * as os from 'node:os'

console.log("Hello", os.EOL ,"World");
// os.EOL is used to Break Line (End of line)


console.log(`Number of parallelism available are: ${os.availableParallelism()}`);
// The os.availableParallelism() method in Node.js returns an integer that represents an estimate of the default amount of parallelism a program should use. This is useful for determining how many concurrent operations you can run based on the number of available CPU cores, taking into account the current system load and other factors12. It’s a more accurate way to gauge parallelism than simply using the length of the array returned by os.cpus(), which represents the total number of logical CPU cores2.


console.log(`Architecture of your os is: ${os.arch()}`);
// tells about the arctitecture of cpu of your machine

console.log(`No of cpu cores in your os are: ${os.cpus().length} and info about eachcore is:`);
console.log(os.cpus());
// Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.

// The properties included on each object include:

// model <string>
// speed <number> (in MHz)
// times <Object>
// user <number> The number of milliseconds the CPU has spent in user mode.
// nice <number> The number of milliseconds the CPU has spent in nice mode.
// sys <number> The number of milliseconds the CPU has spent in sys mode.
// idle <number> The number of milliseconds the CPU has spent in idle mode.
// irq <number> The number of milliseconds the CPU has spent in irq mode.



console.log(`Available free memory in system is ${os.freemem()/1000000000} GigaBytes`);
// Returns the amount of free system memory in bytes as an intege


console.log(`System was up from last :${parseInt(os.uptime()/3600)} hours and ${((os.uptime()/3600)-parseInt(os.uptime()/3600))*60} minutes`);
// Returns the system uptime in number of seconds.