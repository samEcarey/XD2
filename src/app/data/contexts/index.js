export * from "./defaultAppContext";
export * from "./AppGlobalStateContext";
export * from './AuthContext'
export * from './ViewPortContext'
export * from './UserContext'

/**
 * AUTHCONTEXT 
 *  Provided to <App/>
 *  Any component calling useAuth can listen for changes in the authState
 * 
 * USERCONTEXT
 *  Provided to <Workspace/>
 *  Any component calling useUser can listen for changes in the userState
 * 
 */