// abstract class WorkHourStrategy {
//   static register(type: string, strategy: WorkHourStrategy) {
//     WorkHourStrategy.strategies[type] = strategy;
//   }
//   static strategies: Record<string, WorkHourStrategy> = {};
//   static get(type: string) {
//     return WorkHourStrategy.strategies[type];
//   }
// }

// const calculateSalary = function (workerLevel, workHours) {
//   return WorkHourStrategy.get(workerLevel)(workHours);
// };
