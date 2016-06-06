declare module "cron-cluster" {
	function c(redisClient:any):any;

	namespace c {
		export class CronJobWrapper {
			CronJob:CronJob;
		}

		export class CronJob {
			constructor(cronPattern:string, callback:any);

			start();
			stop();
		}
	}

	export = c;
}
