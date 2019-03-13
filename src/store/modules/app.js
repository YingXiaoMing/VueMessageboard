import { deepCopy } from "../../common/utils";
import { constantRouterMap } from "../../router";
const app = {
    state = {
        routers: deepCopy(constantRouterMap)
    }
}
export default app;