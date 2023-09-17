"use client"

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


const Landing = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<String[]>([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [textAreaContent, setTextAreaContent] = useState("");


  //const isLoading
  const onSubmit = async () => {
    

    try {
      const userMessage: String = `${selectedProduct}: ${textAreaContent}`
     
      //const newMessages = [...messages, userMessage];
      console.log(userMessage)
      const response = await axios.post("/api", { messages: userMessage });
      setMessages((current) => [...current, userMessage, response.data]);
    } catch (error: any) {
      //TODO: Open Pro Modal
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex flex-col items-start">
        <Select onValueChange={setSelectedProduct}>
          <SelectTrigger className="w-[380px]">
            <SelectValue  placeholder="Select Product" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="preWorkout">Pre-Workout</SelectItem>
            <SelectItem value="proteinPulver">Protein Pulver</SelectItem>
            <SelectItem value="mealReplacementShake">
              Meal Replacement Shake
            </SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          className="mt-5 mb-5 w-[500px] h-[400px]"
          value={textAreaContent}
          onChange={(e) => setTextAreaContent(e.target.value)}
        />
        <div></div>
        <Button onClick={onSubmit}>Submit</Button>
      </div>
    </div>
  );
};



export default Landing;
