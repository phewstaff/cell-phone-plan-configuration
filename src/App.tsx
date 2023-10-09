import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import { formSchema } from "./schemas";

export default function App() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert(JSON.stringify(values));
  }

  return (
    <div className="m-auto max-w-7xl p-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-8"
        >
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full md:w-96">
                <FormLabel>Телефон</FormLabel>
                <FormControl>
                  <Input
                    placeholder="например 8-928-478-88-44"
                    onChange={field.onChange}
                    defaultValue={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="operator"
            render={({ field }) => (
              <FormItem className="w-full md:w-96">
                <FormLabel>Оператор</FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите оператора" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="мегамегафон">мегамегафон</SelectItem>
                    <SelectItem value="билалайн">билалайн</SelectItem>
                    <SelectItem value="МТСсс">МТСсс</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="max-w-xs" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
