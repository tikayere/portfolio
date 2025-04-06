"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Loader2, Mail, Linkedin, Twitter } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10
    } 
  },
};

export default function Contact() {
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors, isSubmitting } 
  } = useForm<FormData>();
  
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    try {
      setStatus("idle");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mb-12 text-center"
      >
        <motion.h1 
          variants={itemVariants} 
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Have a project in mind or want to collaborate? Drop me a message and I'll get back to you soon.
        </motion.p>
      </motion.section>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="order-2 md:order-1"
        >
          <Card className="border-none shadow-lg dark:shadow-gray-800/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <motion.div variants={itemVariants}>
                  <Input
                    placeholder="Your Name"
                    {...register("name", { 
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters"
                      }
                    })}
                    className="h-12"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="h-12"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    {...register("message", { 
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters"
                      }
                    })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button 
                    type="submit" 
                    className="w-full h-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : "Send Message"}
                  </Button>
                </motion.div>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 text-sm text-green-600 bg-green-50 dark:bg-green-900/20 rounded-md"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 rounded-md"
                  >
                    Something went wrong. Please try again or contact me directly.
                  </motion.p>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="order-1 md:order-2"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-2xl font-bold mb-6"
          >
            Other Ways to Connect
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="space-y-4"
          >
            <div className="p-6 border rounded-lg hover:bg-accent transition-colors">
              <h3 className="font-medium flex items-center gap-2 mb-2">
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                LinkedIn
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                Let's connect professionally
              </p>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Profile
                </a>
              </Button>
            </div>

            <div className="p-6 border rounded-lg hover:bg-accent transition-colors">
              <h3 className="font-medium flex items-center gap-2 mb-2">
                <Twitter className="w-5 h-5 text-[#1DA1F2]" />
                Twitter
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                Follow me for updates and thoughts
              </p>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow Me
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}