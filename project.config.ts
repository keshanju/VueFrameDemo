/**
 *
 */
export default class ProjectConfig {
    /**
     * debug模式
     */
    public static isDebug = false;
    /**
     * 1开发环境 2测试 3生产 4预发布
     */
    public static server_type = parseInt(process.env.VUE_APP_SERVER_TYPE);

    /**
     * 输出
     */
    public static log(...args: any[]) {
        if (ProjectConfig.server_type != 3) {
            for (let i = 0; i < args.length; i++) {
                console.log(args[i]);
            }
        }
    }
}
ProjectConfig.log('当前环境:' + ProjectConfig.server_type + "【1开发环境 2测试 3生产 4预发布】");