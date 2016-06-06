declare module "cron-cluster" {
	function c(redisClient:any):CronJobWrapper;

	export class CronJobWrapper {
		CronJob:CronJob;
	}

	export class CronJob {
		constructor(cronPattern:string, callback:any);
	}

	export = c;
}
