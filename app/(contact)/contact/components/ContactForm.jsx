"use client";
import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const formRef = useRef();

  // Initialize EmailJS on component mount
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const onSubmitHandler = async (data) => {
    console.log('Form submitted!', data);
    
    // Declare variables outside try block so they're accessible in catch
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Debug: Log environment variables (values will be visible in browser console)
    console.log('EmailJS Configuration:', {
      serviceId: serviceId || 'MISSING',
      templateId: templateId || 'MISSING',
      publicKey: publicKey ? `${publicKey.substring(0, 5)}...` : 'MISSING'
    });
    
    try {
      // Test toast immediately
      toast.info("Processing your message...");

      // Check if environment variables are available
      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS configuration missing:', {
          serviceId: !!serviceId,
          templateId: !!templateId,
          publicKey: !!publicKey
        });
        toast.error("Email service is not configured. Please contact me directly at chapokumih@gmail.com");
        return;
      }

      // Validate form data
      if (!formRef.current) {
        toast.error("Form error. Please refresh the page and try again.");
        return;
      }

      // Send email via EmailJS
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      
      console.log('Email sent successfully:', result);
      
      // Show success toast
      toast.success("Message sent successfully! I'll get back to you soon.");
      
      // Reset form
      reset();
      
      // Call parent onSubmit if provided
      if (onSubmit) {
        await onSubmit(data);
      }
    } catch (error) {
      // Log full error details for debugging
      console.error('Error sending email - Full details:', {
        error,
        errorType: typeof error,
        errorText: error?.text,
        errorMessage: error?.message,
        errorStatus: error?.status,
        errorStatusText: error?.statusText,
        serviceId: serviceId || 'MISSING',
        templateId: templateId || 'MISSING',
        publicKey: publicKey ? `${publicKey.substring(0, 5)}...` : 'MISSING'
      });
      
      // Provide more specific error messages
      let errorMessage = "Failed to send message. ";
      
      if (error?.text) {
        errorMessage += error.text;
      } else if (error?.message) {
        errorMessage += error.message;
      } else if (typeof error === 'string') {
        errorMessage += error;
      } else {
        errorMessage += "Please try again later or contact me directly at chapokumih@gmail.com";
      }
      
      toast.error(errorMessage);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmitHandler)} className="space-y-6">
      <div className="space-y-4">
        {/* Name and Email in a 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="from_name" className="text-sm font-medium text-muted-foreground block">
              Your Name
            </label>
            <Input
              {...register("from_name", { required: "Name is required" })}
              id="from_name"
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="rounded-lg border-primary/20 w-full"
            />
            {errors.from_name && (
              <span className="text-xs text-red-500 block mt-1">
                {errors.from_name.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="from_email" className="text-sm font-medium text-muted-foreground block">
              Email
            </label>
            <Input
              {...register("from_email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              id="from_email"
              type="email"
              name="from_email"
              placeholder="your.email@example.com"
              className="rounded-lg border-primary/20 w-full"
            />
            {errors.from_email && (
              <span className="text-xs text-red-500 block mt-1">
                {errors.from_email.message}
              </span>
            )}
          </div>
        </div>

        {/* Message field - full width */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-muted-foreground block">
            Message
          </label>
          <Textarea
            {...register("message", { required: "Message is required" })}
            id="message"
            name="message"
            placeholder="Write your message here..."
            className="rounded-lg border-primary/20 min-h-[150px] w-full resize-y"
          />
          {errors.message && (
            <span className="text-xs text-red-500 block mt-1">
              {errors.message.message}
            </span>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full rounded-xl py-6 text-base font-semibold mt-6"
        disabled={isSubmitting}
        onClick={() => {
          console.log('Button clicked, isSubmitting:', isSubmitting);
        }}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
