import React, { useEffect } from "react";
import { FallbackProps } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/login"), 1000);
  }, [navigate]);

  return <div>에러발생</div>;
};
