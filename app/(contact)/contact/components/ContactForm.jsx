"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const formRef = useRef();
//   console.log(`env : ${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`)

  const onSubmitHandler = async (data) => {
    try {
      // Send email via EmailJS
      if (
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ) {
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
        console.log('Email sent successfully:', result.text);
      } else {
        console.warn('EmailJS environment variables not configured');
        // Still show success to user, but log warning
      }

      await onSubmit(data);
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      // Re-throw to let parent component handle error display
      throw error;
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
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
