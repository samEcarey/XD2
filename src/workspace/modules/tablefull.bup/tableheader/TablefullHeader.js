import React from "react";
import { useSelector } from "react-redux";

export const TablefullHeader = (props) => {
  const appstate = useSelector((state) => state.appstateReducer);
  const userdata = useSelector((state) =>
    state.usercontextReducer.usercontext.filter(
      (userdata) => userdata.ifAuthToken !== ""
    )
  );

  return (
    <section className="table-header">
      {userdata[0].applications.map((application, index) => {
        return (
          <React.Fragment key={index}>
            {application.modules.map((module, index) => {
              if (module.name === appstate.valModule) {
                return (
                  <React.Fragment key={index}>
                    {module.menus.map((menu, index) => {
                      return (
                        <React.Fragment key={index}>
                          {menu.menugroups.map((menugroup, index) => {
                            return (
                              <React.Fragment key={index}>
                                {menugroup.tables &&
                                  menugroup.tables.map((table, index) => {
                                    if (table.name === appstate.valTable) {
                                      return (
                                        <div
                                          className="table-header-details"
                                          key={index}
                                        >
                                          <h2>{table.friendlyname}</h2>
                                          <p>{table.description}</p>
                                        </div>
                                      );
                                    }
                                    return null;
                                  })}
                              </React.Fragment>
                            );
                          })}
                        </React.Fragment>
                      );
                    })}
                  </React.Fragment>
                );
              }
              return null;
            })}
          </React.Fragment>
        );
      })}
    </section>
  );
};
