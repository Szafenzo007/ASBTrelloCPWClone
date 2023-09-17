'use client'

import { useBoardStore } from "@/store/BoardStore";
import {RadioGroup }from '@headlessui/react'
import { CheckCircleIcon } from "@heroicons/react/24/solid";


const types = [
    {
        id: "cpwtodo",
        name: "CpwTodo",
        description: "A New Clienmt needs a CPW",
        color: "bg-blue-500",
    },
    {
        id: "cpwalready",
        name: "CpwAlready",
        description: "Client already has  a CPW needs a CPN",
        color: "bg-yellow-500",
    },
    {
        id: "cpntodo",
        name: "CpNTodo",
        description: "A Client needs a CPN",
        color: "bg-green-500",
    },
    {
        id: "cpnalready",
        name: "CpnAlready",
        description: "A  Client already on CPN needs a CBO",
        color: "bg-red-500",
    },
]

function TaskTypeRadioGroup() {
    const [setNewTaskType, newTaskType] = useBoardStore((state) => [
        state.setNewTaskType,
        state.newTaskType
    ]);

  return (
    <div className="w-full py-5"> 
        <div className="mx-auto w-full max-w-md">
            <RadioGroup 
            value={newTaskType}
            onChange={(e) => {
            setNewTaskType(e);
            }}
            >
                <div className="space-y-2">
                    {types.map((type) => (
                        <RadioGroup.Option 
                        key={type.id}
                        value={type.id}
                        className={({ active, checked }) =>
                        `${
                            active 
                            ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                            : ""
                        }
                        ${
                            checked 
                            ? `${type.color} bg-opacity-75 text-white`
                            : "bg-white"
                        }
                         relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                    }>
                    {({ active, checked }) => (
                        <>
                          <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                                <div className="text-sm">
                                    <RadioGroup.Label
                                    as="p"
                                    className={`font-medium ${
                                        checked ? "text-white" : "text-grey-900"
                                    }`}
                                    >
                                        {type.name}
                                    </RadioGroup.Label>
                                    <RadioGroup.Description
                                    as="span"
                                    className={`inline ${
                                        checked ? "text-white" : "text-gray-500"
                                    }`}
                                    >
                                        <span>{type.description}</span>

                                    </RadioGroup.Description>
                                </div>
                            </div>
                            {checked && (
                                <div className="shrink-0 text-white">
                                    <CheckCircleIcon className="h-6 w-6" />
                          </div>
                            )}
                            </div>
                        
                        </>
                    )}
                     </RadioGroup.Option> 
                    
                    ))}

                </div>

            </RadioGroup>

        </div>
    </div>
  );
}

export default TaskTypeRadioGroup

