# frozen_string_literal: true
require "file/types/FileInfo"
require "json"

module SeedClient
  module File
    class File
      attr_reader :name, :contents, :info, :additional_properties
      # @param name [String] 
      # @param contents [String] 
      # @param info [File::FileInfo] 
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [File::File] 
      def initialze(name:, contents:, info:, additional_properties: nil)
        # @type [String] 
        @name = name
        # @type [String] 
        @contents = contents
        # @type [File::FileInfo] 
        @info = info
        # @type [OpenStruct] 
        @additional_properties = additional_properties
      end
      # Deserialize a JSON object to an instance of File
      #
      # @param json_object [JSON] 
      # @return [File::File] 
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        name = struct.name
        contents = struct.contents
        info = File::FileInfo.from_json(json_object: struct.info)
        new(name: name, contents: contents, info: info, additional_properties: struct)
      end
      # Serialize an instance of File to a JSON object
      #
      # @return [JSON] 
      def to_json
        {
 name: @name,
 contents: @contents,
 info: @info
}.to_json()
      end
    end
  end
end