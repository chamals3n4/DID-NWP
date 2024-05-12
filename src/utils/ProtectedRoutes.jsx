import { Navigate, Outlet } from "react-router-dom";
import supabase from "@/supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";
import { useState, useEffect } from "react";

const ProtectedRoute = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return session ? (
    <Outlet />
  ) : (
    <div
      style={{ padding: "100px", paddingLeft: "400px", paddingRight: "400px" }}
    >
      <h4 className="text-2xl  mb-4">
        Before going to the application, you should authenticate for this
        application 🔐
      </h4>
      <Auth
        supabaseClient={supabase}
        showLinks={true}
        appearance={{ theme: ThemeSupa }}
        providers={false}
      />
    </div>
  );
};

export default ProtectedRoute;
