import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";

import { Navbar, Footer, ThemeSettings, Sidebar } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";

import { ContextProvider, useStateContext } from "./context/ContextProvider";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
    <ContextProvider>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* Floating Settings Button */}
          <div
            className="fixed right-4 bottom-4"
            style={{ zIndex: "1000" }}
          >
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-3xl hover:bg-light-gray text-white"
                style={{
                  background: "red",
                  borderRadius: "50%",
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar */}
          <div
            className={`${
              activeMenu
                ? "w-72"
                : "w-0"
            } fixed sidebar dark:bg-secondary-dark-bg bg-white transition-all duration-300 z-50`}
          >
            <Sidebar />
          </div>

          {/* Main Content Area */}
          <div
    className={`dark:bg-main-bg bg-main-bg min-h-screen w-full transition-all duration-300 ${
      activeMenu ? "md:ml-72" : "flex-2"
    }`}
  >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            {/* Routes */}
            <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* Pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </ContextProvider>
    </div>
  );
};

export default App;
